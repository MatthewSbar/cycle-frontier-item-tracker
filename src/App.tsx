import { useCallback, useEffect, useState } from "react";
import "./App.css";
import {
  ItemName,
  ItemSource,
  QuestProgress,
  UpgradeProgress,
  ViewMode,
  PartName,
} from "./types";
import { quests, upgrades, items } from "./data";
import { ItemList } from "./components/item-list";
import { Icon } from "./components/icon";
import {
  getLocalFocusData,
  getLocalHideData,
  getLocalIsLimitingQuestDepthData,
  getLocalOmittedData,
  getLocalQuestData,
  getLocalQuestListDepthData,
  getLocalUpgradeData,
} from "./common/util";
import { Footer } from "./components/footer";
import { QuestForest } from "./quest-tree";
import { QuestView } from "./components/quest-view";
import { UpgradeView } from "./components/upgrade-view";

function App() {
  const [focusQuests, setFocusQuests] = useState<string[]>(getLocalFocusData());
  const [questDepth, setQuestDepth] = useState<number>(
    getLocalQuestListDepthData()
  );

  const generateQuestForest = useCallback(
    (): QuestForest =>
      QuestForest.new(
        focusQuests.length > 0 ? new Set(focusQuests) : undefined
      ),
    [focusQuests]
  );

  const [questForest, setQuestForest] = useState<QuestForest>(
    generateQuestForest()
  );
  const [upgradeProgress, setUpgradeProgress] = useState<UpgradeProgress>(
    getLocalUpgradeData()
  );
  const [omittedItems, setOmittedItems] = useState<ItemSource>(
    getLocalOmittedData()
  );
  const [showCompleted, setShowCompleted] = useState(getLocalHideData());
  const [viewMode, setViewMode] = useState<ViewMode>("quest");
  const [questProgress, setQuestProgress] = useState<QuestProgress>(
    getLocalQuestData()
  );

  const generateCompletedQuestPartNames = useCallback((): Set<PartName> => {
    const completedQuestPartNames = new Set<PartName>();

    quests.forEach((quest) => {
      quest.parts.forEach((part, index) => {
        if (questProgress[quest.name] > index) {
          completedQuestPartNames.add(part.name);
        }
      });
    });

    return completedQuestPartNames;
  }, [questProgress]);

  const [completedQuestPartNames, setCompletedQuestPartNames] = useState<
    Set<PartName>
  >(generateCompletedQuestPartNames());

  const [isLimitingQuestDepth, setIsLimitingQuestDepth] = useState<boolean>(
    getLocalIsLimitingQuestDepthData()
  );

  /**
   * The main algorithm the app runs on to count items needed
   * @returns A map of item names to quantity needed
   */
  const countItemsNeeded = useCallback((): Record<ItemName, number> => {
    const itemsNeededCopy: Record<ItemName, number> = { ...items };

    // Skip if quests are all hidden
    if (omittedItems !== "quest") {
      const questParts = !isLimitingQuestDepth
        ? questForest.findIncompleteQuestParts(completedQuestPartNames)
        : questForest.findIncompleteQuestParts(
            completedQuestPartNames,
            questDepth
          );

      questParts.forEach((part) => {
        part.deliverItems?.forEach((item) => {
          itemsNeededCopy[item.item] =
            itemsNeededCopy[item.item] + item.quantity;
        });

        part.dropItems?.forEach((item) => {
          itemsNeededCopy[item.item] =
            itemsNeededCopy[item.item] + item.quantity;
        });
      });

      if (focusQuests.length > 0) {
        return itemsNeededCopy;
      }
    }

    // Skip if upgrades are all hidden
    if (omittedItems !== "upgrade") {
      upgrades.forEach((upgrade) => {
        upgrade.stages.forEach((stage, i) => {
          stage.levels.forEach((level, j) => {
            if (upgradeProgress[upgrade.tree][i] > j) {
              return;
            }
            level.items.forEach((item) => {
              itemsNeededCopy[item.item] =
                itemsNeededCopy[item.item] + item.quantity;
            });
            itemsNeededCopy["Kmarks"] =
              itemsNeededCopy["Kmarks"] + level.kMarks;
          });
        });
      });
    }

    return itemsNeededCopy;
  }, [
    completedQuestPartNames,
    focusQuests.length,
    isLimitingQuestDepth,
    omittedItems,
    questDepth,
    questForest,
    upgradeProgress,
  ]);

  const [itemsNeeded, setItemsNeeded] = useState<Record<ItemName, number>>(
    countItemsNeeded()
  );

  /**
   * Click handler for "show completed" setting. If enabled, hides the quests and upgrades stages which are completed.
   */
  const handleToggleShowCompleted = () => {
    const newState = !showCompleted;
    setShowCompleted(newState);
    window.localStorage.setItem("showCompleted", newState ? "show" : "hide");
  };
  const [width, setWidth] = useState(window.innerWidth);

  /**
   * Click handler for the "Limit quest item depth" checkbox.
   *  If enabled, the questDepth number input is displayed & given a default value if there is no local data for questDepth.
   *  Otherwise, hide questDepth input & set questDepth to 0 (disabling depth limit)
   * @param isLimitingQuestDepth the new value of the checkbox
   */
  const handleIsLimitingQuestDepthChange = (isLimitingQuestDepth: boolean) => {
    if (isLimitingQuestDepth) {
      localStorage.setItem("isLimitingQuestDepth", "true");

      const localQuestListDepthData = getLocalQuestListDepthData();

      if (!localQuestListDepthData) {
        setQuestDepth(3);
      } else {
        setQuestDepth(localQuestListDepthData);
      }
    } else {
      localStorage.removeItem("isLimitingQuestDepth");
      setQuestDepth(0);
    }

    setIsLimitingQuestDepth(isLimitingQuestDepth);
  };

  /**
   * Input event handler for the questDepth number input.
   * @param questDepth the new value of the input
   */
  const handleChangeQuestDepth = (questDepth: number) => {
    setQuestDepth(questDepth < 1 ? 1 : questDepth);
    localStorage.setItem("questDepth", `${questDepth}`);
  };

  /**
   * Click handler for setting omitted items. Omitted items are either quests, upgrades, or neither. If a category of items are omitted, they're not included in the items list.
   * @param e click event
   * @param newState The new toggle value
   * @returns
   */
  const handleSetOmittedItems = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    newState: string
  ) => {
    e.stopPropagation();
    if (omittedItems === newState) {
      localStorage.removeItem("omittedItems");
      setOmittedItems(null);
      return;
    }
    setOmittedItems(newState as ItemSource);
    localStorage.setItem("omittedItems", newState);
  };

  // Regenerate QuestForest when questProgress or focusQuests are changed
  useEffect(() => {
    setCompletedQuestPartNames(generateCompletedQuestPartNames());
    setQuestForest(generateQuestForest());
  }, [
    questProgress,
    focusQuests,
    generateCompletedQuestPartNames,
    generateQuestForest,
  ]);

  // Count items needed when questForest, upgrades, omitted items, or questDepth change
  useEffect(() => {
    setItemsNeeded(countItemsNeeded());
  }, [
    questForest,
    upgradeProgress,
    omittedItems,
    questDepth,
    countItemsNeeded,
  ]);

  // Sync quest progress to localStorage
  useEffect(() => {
    window.localStorage.setItem("questProgress", JSON.stringify(questProgress));
  }, [questProgress]);

  // Sync upgrade progress to localStorage
  useEffect(() => {
    window.localStorage.setItem(
      "upgradeProgress",
      JSON.stringify(upgradeProgress)
    );
  }, [upgradeProgress]);

  // Sync focus quests to localStorage
  useEffect(() => {
    window.localStorage.setItem("focusQuests", JSON.stringify(focusQuests));
  }, [focusQuests]);

  // Track the width of the window so we can know if the below condition should be triggered
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // If someone's viewing the mobile-only itemlist, then resizes their window big enough to not-need it, show the quest list
  useEffect(() => {
    if (width > 768 && viewMode === "items") {
      setViewMode("quest");
    }
  }, [width, viewMode]);

  return (
    <>
      <header>
        <h1>The Cycle: Frontier - Item Tracker</h1>
      </header>
      <main>
        <div className="app">
          <div className="main-content">
            <nav>
              <div className="main-nav">
                <h2
                  onClick={() => setViewMode("quest")}
                  className={viewMode !== "quest" ? "inactive" : undefined}
                >
                  Missions
                  <span onClick={(e) => handleSetOmittedItems(e, "quest")}>
                    <Icon
                      name={
                        omittedItems === "quest"
                          ? "visibility_off"
                          : "visibility"
                      }
                      classes={["eye"]}
                    />
                  </span>
                </h2>
                <h2
                  onClick={() => setViewMode("upgrade")}
                  className={viewMode !== "upgrade" ? "inactive" : undefined}
                >
                  Quarters
                  <span onClick={(e) => handleSetOmittedItems(e, "upgrade")}>
                    <Icon
                      name={
                        omittedItems === "upgrade"
                          ? "visibility_off"
                          : "visibility"
                      }
                      classes={["eye"]}
                    />
                  </span>
                </h2>
                {width <= 768 && (
                  <h2
                    className={`item-list-button ${
                      viewMode !== "items" ? "inactive" : undefined
                    }`}
                    onClick={() => setViewMode("items")}
                  >
                    Items
                  </h2>
                )}
              </div>
              <div className="main-nav">
                <h2 onClick={() => handleToggleShowCompleted()}>
                  {showCompleted ? "Hide completed" : "Show completed"}
                </h2>

                <a
                  className="patreon-link"
                  href="https://www.patreon.com/Vedgy"
                >
                  Patreon
                </a>
              </div>
            </nav>
            {viewMode === "quest" && (
              <QuestView
                questProgress={questProgress}
                showCompleted={showCompleted}
                setQuestProgress={setQuestProgress}
                setFocusQuests={setFocusQuests}
                focusQuests={focusQuests}
              />
            )}
            {viewMode === "upgrade" && (
              <UpgradeView
                upgradeProgress={upgradeProgress}
                setUpgradeProgress={setUpgradeProgress}
                showCompleted={showCompleted}
              />
            )}
            <div
              className={`item-list item-list-mobile ${
                viewMode === "items" ? "item-list-show" : undefined
              }`}
            >
              {viewMode === "items" && width <= 768 && (
                <ItemList
                  questProgress={questProgress}
                  itemsNeeded={itemsNeeded}
                  focusQuests={focusQuests}
                  omittedItems={omittedItems}
                  questForest={questForest}
                  completedQuestPartNames={completedQuestPartNames}
                  questDepth={questDepth}
                  handleChangeQuestDepth={handleChangeQuestDepth}
                  isLimitingQuestDepth={isLimitingQuestDepth}
                  handleIsLimitingQuestDepthChange={
                    handleIsLimitingQuestDepthChange
                  }
                />
              )}
            </div>
          </div>
          {width > 768 && (
            <div className={`item-list item-list-desktop`}>
              <ItemList
                questProgress={questProgress}
                itemsNeeded={itemsNeeded}
                focusQuests={focusQuests}
                omittedItems={omittedItems}
                questForest={questForest}
                completedQuestPartNames={completedQuestPartNames}
                questDepth={questDepth}
                handleChangeQuestDepth={handleChangeQuestDepth}
                isLimitingQuestDepth={isLimitingQuestDepth}
                handleIsLimitingQuestDepthChange={
                  handleIsLimitingQuestDepthChange
                }
              />
            </div>
          )}
        </div>
        <hr />
      </main>
      <Footer />
    </>
  );
}

export default App;
