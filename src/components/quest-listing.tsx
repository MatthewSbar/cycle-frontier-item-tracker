import { quests } from "../data";
import { Quest, QuestProgress } from "../types";
import { Icon } from "./icon";
import { ItemChip } from "./item-chip";

type Props = {
  quest: Quest;
  questProgress: QuestProgress;
  setQuestProgress(questProgress: QuestProgress): void;
  showCompleted: boolean;
  setFocusQuests(quest: string[]): void;
  focusQuests: string[];
};

export const QuestListing = ({
  quest,
  questProgress,
  setQuestProgress,
  showCompleted,
  setFocusQuests,
  focusQuests,
}: Props) => {
  const maxQuest = (e: React.MouseEvent, questName: string) => {
    e.preventDefault();
    const quest = quests.find((quest) => quest.name === questName);
    if (quest) {
      handleQuestPartChange(quest.parts.length);
    }
  };

  const handleQuestPartChange = (partNumber: number) => {
    const questProgressCopy = { ...questProgress };

    questProgressCopy[quest.name] = partNumber;

    setQuestProgress(questProgressCopy);
  };

  const questCompleted =
    questProgress[quest.name] ===
    quests.find((q) => q.name === quest.name)?.parts.length;

  const partCompleted = (partNumber: number): boolean => {
    return questProgress[quest.name] > partNumber;
  };

  const isFocused = focusQuests.includes(quest.name);

  const handleFocusToggle = () => {
    const focusQuestsCopy = [...focusQuests];
    if (isFocused) {
      setFocusQuests(focusQuestsCopy.filter((q) => q !== quest.name));
    } else {
      focusQuestsCopy.push(quest.name);
      setFocusQuests(focusQuestsCopy);
    }
  };

  if (questCompleted && isFocused) {
    const focusQuestsCopy = [...focusQuests];
    setFocusQuests(focusQuestsCopy.filter((q) => q !== quest.name));
  }

  if (questCompleted && !showCompleted) {
    return null;
  }

  return (
    <div
      className={`quest-listing ${quest.campaign.toLocaleLowerCase()} ${
        questCompleted ? "completed" : null
      }`}
    >
      <details>
        <summary>
          <h4>{quest.name}</h4>
          <br />
          <div className="inline-flex">
            <span>Parts completed: </span>
            <button
              onClick={() => handleQuestPartChange(0)}
              disabled={questProgress[quest.name] === 0}
            >
              <Icon name="fast_rewind" classes={["negative"]} />
            </button>
            <button
              onClick={() =>
                handleQuestPartChange(questProgress[quest.name] - 1)
              }
              disabled={questProgress[quest.name] === 0}
            >
              <Icon name="remove" classes={["negative"]} />
            </button>
            <span className="upgrade-level">
              {questProgress[quest.name]} /{" "}
              {quests.find((q) => q.name === quest.name)!.parts.length}
            </span>
            <button
              onClick={() =>
                handleQuestPartChange(questProgress[quest.name] + 1)
              }
              disabled={questCompleted}
            >
              <Icon name="add" classes={["positive"]} />
            </button>
            <button
              onClick={(e) => maxQuest(e, quest.name)}
              disabled={questCompleted}
            >
              <Icon name="fast_forward" classes={["positive"]} />
            </button>
          </div>
          <div>
            {!questCompleted && (
              <button onClick={() => handleFocusToggle()}>
                {isFocused ? (
                  <Icon name="star" classes={["star"]} />
                ) : (
                  <Icon name="grade" />
                )}
              </button>
            )}
            {questCompleted && <Icon name="done" />}
          </div>
        </summary>
        <br />
        {quest.parts.map(
          (part, i) =>
            (!partCompleted(i) || showCompleted) && (
              <div key={quest.name + i}>
                Part {i + 1}:
                <ul className="task-list">
                  {part.description && (
                    <li>
                      {partCompleted(i) ? <Icon name="done" /> : null}
                      {part.description}
                    </li>
                  )}
                  {part.deliverItems &&
                    part.deliverItems.map((item, j) => (
                      <li key={`${quest.name}${item.item}${j}`}>
                        {partCompleted(i) ? <Icon name="done" /> : null}
                        <span>Deliver {item.quantity} <ItemChip name={item.item}/></span>
                      </li>
                    ))}
                  {part.dropItems &&
                    part.dropItems.map((item, j) => (
                      <li key={`${quest.name}${item.item}${j}`}>
                        {partCompleted(i) ? <Icon name="done" /> : null}
                        <span>Drop {item.quantity} <ItemChip name={item.item}/> at {item.dropLocation}</span>
                      </li>
                    ))}
                </ul>
              </div>
            )
        )}
      </details>
    </div>
  );
};
