import { useEffect, useState } from "react";
import "./App.css";
import {
  ItemName,
  ItemSource,
  QuestProgress,
  UpgradeProgress,
  ViewMode,
  Faction,
} from "./types";
import { quests, upgrades, items } from "./data";
import { QuestListing } from "./components/quest-listing";
import { UpgradeTree } from "./components/upgrade-tree";
import { ItemList } from "./components/item-list";
import { Icon } from "./components/icon";
import {
  getLocalFocusData,
  getLocalHideData,
  getLocalOmittedData,
  getLocalQuestData,
  getLocalUpgradeData,
} from "./common/util";
import { Footer } from "./components/footer";

function App() {
  const [focusQuests, setFocusQuests] = useState<string[]>(getLocalFocusData());

  /**
   * The main algorithm the app runs on to count items needed
   * @returns A map of item names to quantity needed
   */
  const countItemsNeeded = (): Record<ItemName, number> => {
    const itemsNeededCopy: Record<ItemName, number> = { ...items };

    // Skip if quests are all hidden
    if (omittedItems !== "quest") {
      // Only look at focused quests if any are selected
      if (focusQuests.length > 0) {
        focusQuests.forEach((questName) => {
          const part = quests.find((q) => q.name === questName)?.parts[
            questProgress[questName]
          ];
          part?.deliverItems?.forEach(
            (item) =>
              (itemsNeededCopy[item.item] =
                itemsNeededCopy[item.item] + item.quantity)
          );
          part?.dropItems?.forEach(
            (item) =>
              (itemsNeededCopy[item.item] =
                itemsNeededCopy[item.item] + item.quantity)
          );
        });
        return itemsNeededCopy;
      }

      quests.forEach((quest) => {
        quest.parts.forEach((part, i) => {
          if (questProgress[quest.name] > i) {
            return;
          }
          part.deliverItems?.forEach((item) => {
            itemsNeededCopy[item.item] =
              itemsNeededCopy[item.item] + item.quantity;
          });

          part.dropItems?.forEach((item) => {
            itemsNeededCopy[item.item] =
              itemsNeededCopy[item.item] + item.quantity;
          });
        });
      });
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
  };

  /**
   * A campaign is considered complete if every part of every quest is complete
   * @param campaign
   * @returns true if provided campaign is complete
   */
  const campaignComplete = (campaign: Faction): boolean => {
    return quests
      .filter((q) => q.campaign === campaign)
      .every((q) => questProgress[q.name] === q.parts.length);
  };

  /**
   * All quests are considered completed if all campaigns are completed
   * @returns true if all parts of all quests are completed
   */
  const allQuestsComplete = (): boolean => {
    return (
      campaignComplete("ICA") &&
      campaignComplete("Korolev") &&
      campaignComplete("Osiris")
    );
  };

  /**
   * @returns true if every level of every stage of every upgrade is complete
   */
  const allUpgradesComplete = (): boolean => {
    return upgrades.every((u) =>
      u.stages.every((s, i) => upgradeProgress[u.tree][i] === s.levels.length)
    );
  };

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

  const [questProgress, setQuestProgress] = useState<QuestProgress>(
    getLocalQuestData()
  );
  const [upgradeProgress, setUpgradeProgress] = useState<UpgradeProgress>(
    getLocalUpgradeData()
  );
  const [omittedItems, setOmittedItems] = useState<ItemSource>(
    getLocalOmittedData()
  );
  const [itemsNeeded, setItemsNeeded] = useState<Record<ItemName, number>>(
    countItemsNeeded()
  );
  const [showCompleted, setShowCompleted] = useState(getLocalHideData());
  const [search, setSearch] = useState<string>("");
  const [viewMode, setViewMode] = useState<ViewMode>("quest");

  // Count items needed when quests, upgrades, omitted items, or focus quests change
  useEffect(() => {
    setItemsNeeded(countItemsNeeded());
  }, [questProgress, upgradeProgress, omittedItems, focusQuests]);

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
  }, [width]);

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
            {viewMode === "quest" && (showCompleted || !allQuestsComplete()) && (
              <div className="quest-columns">
                <div className="quests">
                  {(!campaignComplete("Korolev") || showCompleted) && (
                    <h3>Korolev</h3>
                  )}
                  {quests
                    .filter((quest) => quest.campaign === "Korolev")
                    .map((quest) => (
                      <QuestListing
                        key={quest.name}
                        quest={quest}
                        questProgress={questProgress}
                        setQuestProgress={setQuestProgress}
                        showCompleted={showCompleted}
                        setFocusQuests={setFocusQuests}
                        focusQuests={focusQuests}
                      />
                    ))}
                </div>
                <div className="quests">
                  {(!campaignComplete("Osiris") || showCompleted) && (
                    <h3>Osiris</h3>
                  )}
                  {quests
                    .filter((quest) => quest.campaign === "Osiris")
                    .map((quest) => (
                      <QuestListing
                        key={quest.name}
                        quest={quest}
                        questProgress={questProgress}
                        setQuestProgress={setQuestProgress}
                        showCompleted={showCompleted}
                        setFocusQuests={setFocusQuests}
                        focusQuests={focusQuests}
                      />
                    ))}
                </div>
                <div className="quests">
                  {(!campaignComplete("ICA") || showCompleted) && <h3>ICA</h3>}
                  {quests
                    .filter((quest) => quest.campaign === "ICA")
                    .map((quest) => (
                      <QuestListing
                        key={quest.name}
                        quest={quest}
                        questProgress={questProgress}
                        setQuestProgress={setQuestProgress}
                        showCompleted={showCompleted}
                        setFocusQuests={setFocusQuests}
                        focusQuests={focusQuests}
                      />
                    ))}
                </div>
              </div>
            )}
            {viewMode === "quest" && !showCompleted && allQuestsComplete() && (
              <div>Damn, you did all the quests. Nice.</div>
            )}
            {viewMode === "upgrade" &&
              (showCompleted || !allUpgradesComplete()) && (
                <div className="upgrade-grid">
                  {upgrades.map((upgrade) => (
                    <div key={upgrade.tree} className="upgrade-column">
                      <UpgradeTree
                        upgrade={upgrade}
                        upgradeProgress={upgradeProgress}
                        setUpgradeProgress={setUpgradeProgress}
                        showCompleted={showCompleted}
                        name={upgrade.tree}
                      />
                    </div>
                  ))}
                </div>
              )}
            {viewMode === "upgrade" &&
              !showCompleted &&
              allUpgradesComplete() && (
                <div>Damn, you got all the upgrades. Nice.</div>
              )}
            <div
              className={`item-list item-list-mobile ${
                viewMode === "items" ? "item-list-show" : undefined
              }`}
            >
              {viewMode === "items" && width <= 768 && (
                <ItemList
                  questProgress={questProgress}
                  search={search}
                  setSearch={setSearch}
                  itemsNeeded={itemsNeeded}
                  focusQuests={focusQuests}
                  omittedItems={omittedItems}
                />
              )}
            </div>
          </div>
          {width > 768 && (
            <div className={`item-list item-list-desktop`}>
              <ItemList
                questProgress={questProgress}
                search={search}
                setSearch={setSearch}
                itemsNeeded={itemsNeeded}
                focusQuests={focusQuests}
                omittedItems={omittedItems}
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
