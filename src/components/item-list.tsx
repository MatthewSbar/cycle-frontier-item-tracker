import { quests } from "../data";
import { ItemName, QuestProgress } from "../types";

type Props = {
  itemsNeeded: Record<ItemName, number>;
  search: string;
  setSearch(query: string): void;
  questProgress: QuestProgress;
};

export const ItemList = ({
  itemsNeeded,
  search,
  setSearch,
  questProgress,
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
      {Object.keys(itemsNeeded)
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
    </div>
  );
};
