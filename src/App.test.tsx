import { QuestForest } from "./quest-tree";
import { PartName, UpgradeProgress } from "./types";
import { quests, upgrades } from "./data";
import { UpgradeForest } from "./uprade-tree";
import { clearUpgradeProgress } from "./common/util";

test("quest forest", () => {
  const questForest = QuestForest.new();

  const completeQuestPartNames = new Set<PartName>();

  // test that the three starter quests are returned when there are no parts marked complete
  const starterQuestParts = questForest.findIncompleteQuestParts(
    completeQuestPartNames,
    1
  );

  expect(starterQuestParts.length).toEqual(3);

  expect(
    starterQuestParts.find((part) => part.name === "Welcome to the Workforce")
  ).toBeTruthy();
  expect(
    starterQuestParts.find((part) => part.name === "Simple Needs")
  ).toBeTruthy();
  expect(
    starterQuestParts.find((part) => part.name === "Prove your Worth")
  ).toBeTruthy();

  // test depth of 2, test multi-child quests ("Company Identity" is required by "Mineral Master", "Spring Cleaning")
  completeQuestPartNames.add("Welcome to the Workforce");
  completeQuestPartNames.add("Sometimes violence IS the answer");
  completeQuestPartNames.add("Spare Parts");
  completeQuestPartNames.add("Contaminated Waters");

  const questParts = questForest.findIncompleteQuestParts(
    completeQuestPartNames,
    2
  );

  expect(questParts.length).toEqual(7);

  expect(
    questParts.find((part) => part.name === "Company Identity")
  ).toBeTruthy();
  expect(
    questParts.find((part) => part.name === "Mineral Master")
  ).toBeTruthy();
  expect(
    questParts.find((part) => part.name === "Spring Cleaning")
  ).toBeTruthy();
  expect(questParts.find((part) => part.name === "Simple Needs")).toBeTruthy();
  expect(
    questParts.find((part) => part.name === "Don't Forget to Recycle")
  ).toBeTruthy();
  expect(
    questParts.find((part) => part.name === "Prove your Worth")
  ).toBeTruthy();
  expect(
    questParts.find((part) => part.name === "The Real Wetwork")
  ).toBeTruthy();

  // test infinite depth with no completed quests (should just return all quests)
  const allQuestParts = questForest.findIncompleteQuestParts(new Set());

  const questPartCount = quests.reduce(
    (count, quest) => count + quest.parts.length,
    0
  );

  expect(allQuestParts.length).toEqual(questPartCount);
});

test("upgrade forest infinite depth", () => {

  // test infinite depth with no completed upgrades (should return all upgrades except the first quarters upgrade)
  const upgradeForest = UpgradeForest.new();
  const upgradeProgress = clearUpgradeProgress();

  const allUpgradeLevels = upgradeForest.findIncompleteUpgradeLevels(upgradeProgress);

  const allUpgradeLevelCount = upgrades
    .map(upgrade =>
      upgrade.stages.map(stage => stage.levels).flat()
    )
    .flat()
    .length - 1;

  expect(allUpgradeLevels.length).toEqual(allUpgradeLevelCount);

});

test("upgrade forest first level upgrades", () => {

  // tests that the first upgrades for all trees return properly
  const upgradeForest = UpgradeForest.new();
  const upgradeProgress = clearUpgradeProgress();

  const originalFirstLevelUpgrades = upgrades
    .map(upgrade => {
      if (upgrade.tree === "Quarters") {
        return upgrade.stages[0].levels[1]
      }
      return upgrade.stages[0].levels[0];
    });

  const firstLevelUpgrades = upgradeForest.findIncompleteUpgradeLevels(upgradeProgress, 1);

  expect(
    JSON.stringify(originalFirstLevelUpgrades)
  ).toEqual(
    JSON.stringify(firstLevelUpgrades)
  );
});

test("upgrade forest first three level upgrades", () => {

  // tests that the first three upgrades for all trees return properly
  const upgradeForest = UpgradeForest.new();
  const upgradeProgress = clearUpgradeProgress();

  const originalFirstThreeLevelUpgrades = upgrades
    .map(upgrade => {
      const levels = upgrade.stages
        .map(stages => stages.levels)
        .flat();

      if (upgrade.tree === "Quarters") {
        return levels.slice(1, 4);
      }
      return levels.slice(0, 3);
    })
    .flat();

  const firstThreeLevelUpgrades = upgradeForest.findIncompleteUpgradeLevels(upgradeProgress, 3);

  expect(
    JSON.stringify(originalFirstThreeLevelUpgrades)
  ).toEqual(
    JSON.stringify(firstThreeLevelUpgrades)
  );
});

test("upgrade forest with progress", () => {

  // in this test, everything is maxed except for Generate Kmarks, which is only missing 1 upgrade.
  const upgradeForest = UpgradeForest.new();
  const upgradeProgress = {
    "Quarters": [ 10 ],
    "Generate Kmarks": [ 5, 5, 5, 4 ],
    "Kmark Passive Cap": [ 4, 5, 5, 5 ],
    "Generate Aurum": [ 5, 5, 5, 5 ],
    "Aurum Passive Cap": [ 4, 5, 5, 5 ],
    "Supply Crate": [ 2, 2, 2, 2 ],
    "Stash": [ 3, 3, 3, 3, 3 ],
    "Safe Pockets": [ 1, 1, 1, 1, 1 ],
    "Workbench": [ 3, 3, 3, 3 ]
  }

  const originalLastKmarkUpgrade = upgrades
    .filter(upgrade => upgrade.tree === "Generate Kmarks")
    .map(upgrade => upgrade.stages[3].levels.slice(4))
    .flat();

  expect(
    JSON.stringify(originalLastKmarkUpgrade)
  ).toEqual(
    JSON.stringify(upgradeForest.findIncompleteUpgradeLevels(upgradeProgress))
  );

  expect(
    JSON.stringify(originalLastKmarkUpgrade)
  ).toEqual(
    JSON.stringify(upgradeForest.findIncompleteUpgradeLevels(upgradeProgress, 1))
  );
});
