import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { QuestForest } from "./quest-tree";
import { MissionName } from "./types";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("quest forest", () => {
  const questForest = QuestForest.new();

  const completeMissions = new Set<MissionName>();

  // test that the three starter quests are returned when there are no missions marked complete
  const starterQuests = questForest.findIncompleteQuests(completeMissions, 1);

  expect(starterQuests.length).toEqual(3);

  expect(starterQuests.find(quest => quest.name === "Welcome to the Workforce")).toBeTruthy();
  expect(starterQuests.find(quest => quest.name === "Simple Needs")).toBeTruthy();
  expect(starterQuests.find(quest => quest.name === "Prove your Worth")).toBeTruthy();

  // test depth of 2, test multi-child quests ("Company Identity" is required by "Mineral Master", "Spring Cleaning")
  completeMissions.add("Welcome to the Workforce");
  completeMissions.add("Sometimes violence IS the answer");
  completeMissions.add("Spare Parts");
  completeMissions.add("Contaminated Waters");

  const quests = questForest.findIncompleteQuests(completeMissions, 2);

  expect(quests.length).toEqual(7);

  expect(quests.find(quest => quest.name === "Company Identity")).toBeTruthy();
  expect(quests.find(quest => quest.name === "Mineral Master")).toBeTruthy();
  expect(quests.find(quest => quest.name === "Spring Cleaning")).toBeTruthy();
  expect(quests.find(quest => quest.name === "Simple Needs")).toBeTruthy();
  expect(quests.find(quest => quest.name === "Don't Forget to Recycle")).toBeTruthy();
  expect(quests.find(quest => quest.name === "Prove your Worth")).toBeTruthy();
  expect(quests.find(quest => quest.name === "The Real Wetwork")).toBeTruthy();


  // test infinite depth with no completed quests (should just return all quests)
  const allQuests = questForest.findIncompleteQuests(new Set());

  expect(allQuests.length).toEqual(157);
});
