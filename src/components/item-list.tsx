import { quests } from "../data";
import { ItemName, ItemSource, QuestProgress } from "../types";

type Props = {
  itemsNeeded: Record<ItemName, number>;
  search: string;
  setSearch(query: string): void;
  questProgress: QuestProgress;
  focusQuests: string[];
  omittedItems: ItemSource | null;
};

export const ItemList = ({
  itemsNeeded,
  search,
  setSearch,
  questProgress,
  focusQuests,
  omittedItems,
}: Props) => {
  return (
    <div>
      <div className="search-wrapper">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for items"
        />
      </div>
      <div>💀🗑️ = Item must be dead dropped</div>
      <hr />

      {omittedItems === "quest" ? (
        <div>Items needed for quests are currently hidden.</div>
      ) : focusQuests.length > 0 ? (
        <div>
          Only showing items from:
          <ul className="quest-list">
            {focusQuests.map((questName) => (
              <li key={questName}>
                {questName} - part {questProgress[questName] + 1}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {omittedItems === "upgrade" ? (
        <div>Items needed for upgrades are currently hidden.</div>
      ) : null}
      {omittedItems || (omittedItems === 'quest' && focusQuests.length > 0) && <hr />}
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
                {key}: {itemsNeeded[key as ItemName]}{" "}
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
