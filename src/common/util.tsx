import { quests, upgrades } from "../data";
import { ItemSource, QuestProgress, UpgradeProgress } from "../types";

export const flushLocalData = () => {
  if (window.confirm("Are you sure you want to remove all your data?")) {
    window.localStorage.removeItem("questProgress");
    window.localStorage.removeItem("upgradeProgress");
    window.localStorage.removeItem("showCompleted");
    window.localStorage.removeItem("focusQuests");
    window.localStorage.removeItem("omittedItems");
    window.location.href =
      "https://matthewsbar.github.io/cycle-frontier-item-tracker/";
  }
};

export const clearQuestProgress = (): QuestProgress => {
  const allQuests: QuestProgress = {};

  quests.forEach((quest) => {
    allQuests[quest.name] = 0;
  });

  return allQuests;
};

export const getLocalQuestData = (): QuestProgress => {
  const localData = localStorage.getItem("questProgress");
  if (localData) {
    return JSON.parse(localData) as QuestProgress;
  }
  return clearQuestProgress();
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

export const getLocalUpgradeData = (): UpgradeProgress => {
  const localData = localStorage.getItem("upgradeProgress");
  if (localData) {
    return JSON.parse(localData) as UpgradeProgress;
  }
  return clearUpgradeProgress();
};

export const getLocalOmittedData = (): ItemSource => {
  return localStorage.getItem("omittedItems") as ItemSource;
};

export const getLocalHideData = (): boolean => {
  const localData = localStorage.getItem("showCompleted") === "show";
  if (!localData) {
    return true;
  }
  return localStorage.getItem("showCompleted") === "show";
};

export const getLocalFocusData = (): string[] => {
  const localData = localStorage.getItem("focusQuests");
  if (!localData) {
    return [];
  }
  return JSON.parse(localData) as string[];
};
