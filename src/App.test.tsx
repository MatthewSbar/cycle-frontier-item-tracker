import { QuestForest } from "./quest-tree";
import { MissionName } from "./types";
import { quests } from "./data";

test("quest forest", () => {
  const questForest = QuestForest.new();

  const completeQuestPartNames = new Set<MissionName>();

  // test that the three starter quests are returned when there are no missions marked complete
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
