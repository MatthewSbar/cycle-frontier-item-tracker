import {quests} from "../data";
import {ItemName, ItemSource, MissionName, Quest, QuestProgress} from "../types";
import {QuestForest} from "../quest-tree";
import {useState} from "react";

type Props = {
  itemsNeeded: Record<ItemName, number>;
  search: string;
  setSearch(query: string): void;
  questProgress: QuestProgress;
  focusQuests: string[];
  omittedItems: ItemSource | null;
  questForest: QuestForest;
  completedQuestPartNames: Set<MissionName>;
  questDepth: number;
  handleChangeQuestDepth(depth: number): void;
  isLimitingQuestDepth: boolean;
  handleIsLimitingQuestDepthChange(isLimitingQuestDepth: boolean): void;
};

export const ItemList = ({
  itemsNeeded,
  search,
  setSearch,
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

  const initializePartNameQuestNameMap = (): Map<MissionName, Quest> => {
    const partNameQuestNameMap = new Map<MissionName, Quest>();

    quests.forEach(quest => {
      quest.parts.forEach(part => {
        partNameQuestNameMap.set(part.name, quest);
      });
    });

    return partNameQuestNameMap;
  };

  let [partNameQuestNameMap] = useState<Map<MissionName, Quest>>(
    initializePartNameQuestNameMap()
  );

  const getFocusedDepthLimitedQuestParts = (): { questName: string, partNumber: number }[] => {

    const parts = questForest.findIncompleteQuestParts(completedQuestPartNames, questDepth).reverse();

    return parts.map((part, index) => {
      const quest = partNameQuestNameMap.get(part.name);

      return {
        questName: quest?.name ?? '',
        partNumber: (quest?.parts?.findIndex(_part => _part.name === part.name) ?? 0) + 1
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
      <div className="limit-quest-depth-checkbox-wrapper">
        <input
          type="checkbox"
          checked={isLimitingQuestDepth}
          onChange={() => handleIsLimitingQuestDepthChange(!isLimitingQuestDepth)}
        />
        <label>Limit quest item depth</label>
      </div>
      { isLimitingQuestDepth && (
        <div className="limit-quest-depth-wrapper">
          <label>Depth:</label>
          <input
            type="number"
            value={questDepth}
            onChange={(e) => handleChangeQuestDepth(+e.target.value)}
          />
        </div>
      )}
      <div>💀🗑️ = Item must be dead dropped</div>
      <hr />

      {omittedItems === "quest" ? (
        <div>
          Items needed for quests are currently hidden.
          <hr />
        </div>
      ) : focusQuests.length > 0 ? (
        <div>
          Only showing items from:
          <ul className="quest-list">
            {isLimitingQuestDepth && getFocusedDepthLimitedQuestParts().map(({ questName, partNumber }) => (
              <li key={questName + partNumber}>
                {questName} - part {partNumber}
              </li>
            ))}
            {!isLimitingQuestDepth && focusQuests.map((questName) => (
              <li key={questName}>
                {questName} - part {questProgress[questName] + 1}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {omittedItems === "upgrade" ? (
        <div>
          Items needed for upgrades are currently hidden.
          <hr />
        </div>
      ) : null}
      {Object.keys(itemsNeeded)
        .filter((key) => itemsNeeded[key as ItemName] > 0)
        .sort()
        .map((key) => {
          if (
            search.length === 0 ||
            key.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          ) {
            return (
              <div key={key}>
                {key}: {itemsNeeded[key as ItemName].toLocaleString()}{" "}
                {quests
                  .filter(
                    (quest) => quest.parts.length > questProgress[quest.name]
                  )
                  .some((quest) =>
                    quest.parts.some((part) =>
                      part.dropItems?.some((item) => item.item === key)
                    )
                  )
                  ? "💀🗑️"
                  : null}
              </div>
            );
          }
        })}
      {Object.keys(itemsNeeded).filter(
        (key) => itemsNeeded[key as ItemName] > 0
      ).length === 0
        ? "No items needed based on current filter criteria."
        : null}
    </div>
  );
};
