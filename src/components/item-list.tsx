import { quests } from "../data";
import {
  ItemName,
  ItemSource,
  PartName,
  Quest,
  QuestPart,
  QuestProgress,
} from "../types";
import { QuestForest } from "../quest-tree";
import { useState } from "react";
import { initializePartNameQuestNameMap } from "../common/util";
import { Item } from "./item";

type Props = {
  itemsNeeded: Record<ItemName, number>;
  questProgress: QuestProgress;
  focusQuests: string[];
  omittedItems: ItemSource | null;
  questForest: QuestForest;
  completedQuestPartNames: Set<PartName>;
  questDepth: number;
  handleChangeQuestDepth(depth: number): void;
  isLimitingQuestDepth: boolean;
  handleIsLimitingQuestDepthChange(isLimitingQuestDepth: boolean): void;
};

export const ItemList = ({
  itemsNeeded,
  questProgress,
  focusQuests,
  omittedItems,
  questForest,
  completedQuestPartNames,
  questDepth,
  handleChangeQuestDepth,
  isLimitingQuestDepth,
  handleIsLimitingQuestDepthChange,
}: Props) => {
  let [partNameQuestNameMap] = useState<Map<PartName, Quest>>(
    initializePartNameQuestNameMap()
  );
  const [search, setSearch] = useState<string>("");

  const getFocusedDepthLimitedQuestParts = (): QuestPart[] => {
    return (
      !isLimitingQuestDepth
        ? questForest.findIncompleteQuestParts(completedQuestPartNames)
        : questForest.findIncompleteQuestParts(
            completedQuestPartNames,
            questDepth
          )
    )
      .reverse()
      .map((part) => {
        const quest = partNameQuestNameMap.get(part.name);

        return {
          questName: quest?.name ?? "",
          partNumber:
            (quest?.parts?.findIndex((p) => p.name === part.name) ?? 0) + 1,
        };
      });
  };

  return (
    <div>
      <div className="search-wrapper">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for items"
        />
      </div>
      {omittedItems !== "quest" && (
        <div className="limit-quest-depth-checkbox-wrapper">
          <label>
            <input
              type="checkbox"
              checked={isLimitingQuestDepth}
              onChange={() =>
                handleIsLimitingQuestDepthChange(!isLimitingQuestDepth)
              }
            />
            Limit mission item depth
          </label>
          {isLimitingQuestDepth && (
            <div className="limit-quest-depth-wrapper">
              <label>Depth:</label>
              <input
                type="number"
                value={questDepth}
                min={1}
                onChange={(e) => handleChangeQuestDepth(+e.target.value)}
              />
            </div>
          )}
          <hr />
        </div>
      )}

      {omittedItems === "quest" ? (
        <div>
          Items needed for quests are currently hidden.
          <hr />
        </div>
      ) : focusQuests.length > 0 ? (
        <div>
          Only showing items from:
          <ul className="quest-list">
            {isLimitingQuestDepth
              ? getFocusedDepthLimitedQuestParts().map(
                  ({ questName, partNumber }) => (
                    <li key={questName + partNumber}>
                      {questName} - part {partNumber}
                    </li>
                  )
                )
              : focusQuests.map((quest, i) => {
                  return (
                    <li key={quest + i}>{`${quest} - part ${
                      questProgress[quest] + 1
                    }`}</li>
                  );
                })}
          </ul>
          <hr />
        </div>
      ) : null}
      {omittedItems === "upgrade" ? (
        <div>
          Items needed for upgrades are currently hidden.
          <hr />
        </div>
      ) : null}
      <div>💀🗑️ = Item must be dead dropped</div>
      <hr />
      {Object.keys(itemsNeeded)
        .filter((key) => itemsNeeded[key as ItemName] > 0)
        .filter(
          (key) =>
            search === "" ||
            key.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        .sort()
        .map((key) => (
          <div key={key}>
            <Item name={key as ItemName}/>: {itemsNeeded[key as ItemName].toLocaleString()}{" "}
            {quests
              .filter((quest) => quest.parts.length > questProgress[quest.name])
              .some((quest) =>
                quest.parts.some((part) =>
                  part.dropItems?.some((item) => item.item === key)
                )
              )
              ? "💀🗑️"
              : null}
          </div>
        ))}

      {Object.keys(itemsNeeded).filter(
        (key) => itemsNeeded[key as ItemName] > 0
      ).length === 0
        ? "No items needed based on current filter criteria."
        : null}
    </div>
  );
};
