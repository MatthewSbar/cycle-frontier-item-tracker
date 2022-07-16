import { itemRarity, quests, upgrades } from "../data";
import {
  ItemName,
  ItemRarityEnum,
  ItemSource,
  PartName,
  Quest,
  QuestProgress,
  UpgradeProgress,
} from "../types";

export const flushLocalData = () => {
  if (window.confirm("Are you sure you want to remove all your data?")) {
    window.localStorage.removeItem("questProgress");
    window.localStorage.removeItem("upgradeProgress");
    window.localStorage.removeItem("showCompleted");
    window.localStorage.removeItem("focusQuests");
    window.localStorage.removeItem("omittedItems");
    window.localStorage.removeItem("questDepth");
    window.localStorage.removeItem("isLimitingQuestDepth");
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

export const getLocalQuestListDepthData = (): number => {
  const localQuestListDepth = localStorage.getItem("questDepth");
  if (localQuestListDepth) {
    return +localQuestListDepth;
  }

  return 0;
};

export const getLocalIsLimitingQuestDepthData = (): boolean => {
  const localQuestListDepthChecked = localStorage.getItem(
    "isLimitingQuestDepth"
  );
  if (localQuestListDepthChecked) {
    return JSON.parse(localQuestListDepthChecked);
  }

  return false;
};

export const initializePartNameQuestNameMap = (): Map<PartName, Quest> => {
  const partNameQuestNameMap = new Map<PartName, Quest>();

  quests.forEach((quest) => {
    quest.parts.forEach((part) => {
      partNameQuestNameMap.set(part.name, quest);
    });
  });

  return partNameQuestNameMap;
};

export const itemRaritySorter = (a: ItemName, b: ItemName): number => {
  const itemRarityA = itemRarity[a];
  const itemRarityB = itemRarity[b];

  const diff = ItemRarityEnum[itemRarityA] - ItemRarityEnum[itemRarityB];

  if (diff === 0) {
    return a.localeCompare(b);
  }

  return diff;
};
