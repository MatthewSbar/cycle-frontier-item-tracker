import { quests } from "../data";
import { ItemName, ItemSource, QuestProgress } from "../types";

const deadDrop = "💀🗑️";

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
  const searchCount = search.length;
  const itemsNeededCount = Object.keys(itemsNeeded).length;
  const itemsCompletedCount = Object.keys(itemsNeeded).filter((key) => itemsNeeded[key as ItemName] === 0).length;
  const focusQuestsCount = focusQuests.length;

  const searchBox = (<div className="search-wrapper">
    <input
      type="text"
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search for items"
    />
  </div>);

  const sellableList = (<div>
      <hr />
      <div>💰 Sellable Items</div>
      <hr />
      {Object.keys(itemsNeeded)
        .filter((key) => itemsNeeded[key as ItemName] === 0)
        .sort()
        .map((key) => {
          if (searchCount === 0 || key.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
            return (<div key={key}>{key}</div>);
          }
        })
      }
    </div>);

  const header = (<div>
    <hr />
    <div>{deadDrop}️ = Item must be dead dropped</div>
    {omittedItems !== null ? (<div>
      <div>{omittedItems.charAt(0).toUpperCase() + omittedItems.slice(1)} items are currently hidden.</div>
    </div>) : null}
    <hr />
  </div>);

  const focusedQuests = (<div>
    <hr />
    Only showing items from:
    <ul className="quest-list">
      {focusQuests.map((questName) => (
        <li key={questName}>
          {questName} - part {questProgress[questName] + 1}
        </li>
      ))}
    </ul>
  </div>);

  const itemList = (<div>
    {Object.keys(itemsNeeded)
      .filter((key) => itemsNeeded[key as ItemName] > 0)
      .sort()
      .map((key) => {
        if (searchCount === 0 || key.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
          return (
            <div key={key}>
              {key}: {itemsNeeded[key as ItemName]}{" "}
              {quests
                .filter((quest) => quest.parts.length > questProgress[quest.name])
                .some((quest) =>
                  quest.parts.some((part) =>
                    part.dropItems?.some((item) => item.item === key)
                  )
                )
                ? deadDrop
                : null}
            </div>
          );
        }
      })}
  </div>);

  return (
    <div>
      {searchBox}
      {itemsCompletedCount === itemsNeededCount ? sellableList : (<div>
        {header}
        {focusQuestsCount > 0 ? focusedQuests : null}
        {itemList}
        {focusQuestsCount === 0 && omittedItems === null ? sellableList : null}
      </div>)}
    </div>
  );
};
