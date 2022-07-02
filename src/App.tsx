import { useEffect, useState } from "react";
import "./App.css";
import {
  ItemName,
  QuestProgress,
  UpgradeProgress,
  ViewMode,
  Faction,
} from "./types";
import { quests, upgrades, items } from "./data";
import { QuestListing } from "./components/quest-listing";
import { UpgradeTree } from "./components/upgrade-tree";
import { ItemList } from "./components/item-list";

function App() {
  const clearQuestProgress = (): QuestProgress => {
    const allQuests: QuestProgress = {};

    quests.forEach((quest) => {
      allQuests[quest.name] = 0;
    });

    return allQuests;
  };

  const clearUpgradeProgress = (): UpgradeProgress => {
    const allUpgrades: UpgradeProgress = {
      Quarters: [],
      "Generate Kmarks": [],
      "Kmark Passive Cap": [],
      "Generate Aurum": [],
      "Aurum Passive Cap": [],
      "Supply Crate": [],
      Stash: [],
      "Safe Pockets": [],
      Workbench: [],
    };

    upgrades.forEach((upgrade) => {
      allUpgrades[upgrade.tree] = upgrade.stages.map((stage) => 0);
    });

    allUpgrades.Quarters = [1];

    return allUpgrades;
  };

  const countItemsNeeded = (): Record<ItemName, number> => {
    const itemsNeededCopy: Record<ItemName, number> = { ...items };

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
          itemsNeededCopy["Kmarks"] = itemsNeededCopy["Kmarks"] + level.kMarks;
        });
      });
    });
    return itemsNeededCopy;
  };

  const getLocalQuestData = (): QuestProgress => {
    const localData = localStorage.getItem("questProgress");
    if (localData) {
      return JSON.parse(localData) as QuestProgress;
    }
    return clearQuestProgress();
  };

  const getLocalHideData = (): boolean => {
    const localData = localStorage.getItem("showCompleted") === "show";
    if (!localData) {
      return true;
    }
    return localStorage.getItem("showCompleted") === "show";
  };

  const campaignComplete = (campaign: Faction): boolean => {
    return quests
      .filter((q) => q.campaign === campaign)
      .every((q) => questProgress[q.name] === q.parts.length);
  };

  const allQuestsComplete = (): boolean => {
    return (
      campaignComplete("ICA") &&
      campaignComplete("Korolev") &&
      campaignComplete("Osirus")
    );
  };

  const allUpgradesComplete = (): boolean => {
    return upgrades.every((u) =>
      u.stages.every((s, i) => upgradeProgress[u.tree][i] === s.levels.length)
    );
  };

  const flushLocalData = () => {
    if (window.confirm("Are you sure you want to remove all your data?")) {
      window.localStorage.removeItem("questProgress");
      window.localStorage.removeItem("upgradeProgress");
      window.localStorage.removeItem("showCompleted");
      window.location.href =
        "https://matthewsbar.github.io/cycle-frontier-item-tracker/";
    }
  };

  const getLocalUpgradeData = (): UpgradeProgress => {
    const localData = localStorage.getItem("upgradeProgress");
    if (localData) {
      return JSON.parse(localData) as UpgradeProgress;
    }
    return clearUpgradeProgress();
  };

  const handleToggleShowCompleted = () => {
    const newState = !showCompleted;
    setShowCompleted(newState);
    window.localStorage.setItem("showCompleted", newState ? "show" : "hide");
  };
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const [questProgress, setQuestProgress] = useState<QuestProgress>(
    getLocalQuestData()
  );
  const [upgradeProgress, setUpgradeProgress] = useState<UpgradeProgress>(
    getLocalUpgradeData()
  );
  const [itemsNeeded, setItemsNeeded] = useState<Record<ItemName, number>>(
    countItemsNeeded()
  );
  const [showCompleted, setShowCompleted] = useState(getLocalHideData());

  const [search, setSearch] = useState<string>("");
  const [viewMode, setViewMode] = useState<ViewMode>("quest");

  useEffect(() => {
    setItemsNeeded(countItemsNeeded());
    window.localStorage.setItem("questProgress", JSON.stringify(questProgress));
    window.localStorage.setItem(
      "upgradeProgress",
      JSON.stringify(upgradeProgress)
    );
  }, [questProgress, upgradeProgress]);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (width > 768 && viewMode === "items") {
      setViewMode("quest");
    }
  });

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
                </h2>
                <h2
                  onClick={() => setViewMode("upgrade")}
                  className={viewMode !== "upgrade" ? "inactive" : undefined}
                >
                  Quarters
                </h2>
                <h2
                  className={`item-list-button ${
                    viewMode !== "items" ? "inactive" : undefined
                  }`}
                  onClick={() => setViewMode("items")}
                >
                  Items
                </h2>
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
            <hr />
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
                      />
                    ))}
                </div>
                <div className="quests">
                  {(!campaignComplete("Osirus") || showCompleted) && (
                    <h3>Osirus</h3>
                  )}
                  {quests
                    .filter((quest) => quest.campaign === "Osirus")
                    .map((quest) => (
                      <QuestListing
                        key={quest.name}
                        quest={quest}
                        questProgress={questProgress}
                        setQuestProgress={setQuestProgress}
                        showCompleted={showCompleted}
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
              <ItemList
                questProgress={questProgress}
                search={search}
                setSearch={setSearch}
                itemsNeeded={itemsNeeded}
              />
            </div>
          </div>
          <div className={`item-list item-list-desktop`}>
            <ItemList
              questProgress={questProgress}
              search={search}
              setSearch={setSearch}
              itemsNeeded={itemsNeeded}
            />
          </div>
        </div>
        <hr />
      </main>

      <footer className="footer">
        <a href="https://github.com/MatthewSbar/cycle-frontier-item-tracker">
          Github
        </a>{" "}
        · <a href="https://www.patreon.com/Vedgy">Patreon</a> ·{" "}
        <a href="https://vedgy.bandcamp.com/">Check out my mixtape</a> ·{" "}
        <button className="delete-button" onClick={() => flushLocalData()}>
          🚽 Flush local data
        </button>
      </footer>
    </>
  );
}

export default App;
