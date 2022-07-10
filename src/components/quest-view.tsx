import { quests } from "../data";
import { Faction, QuestProgress } from "../types";
import { QuestListing } from "./quest-listing";

type Props = {
  questProgress: QuestProgress;
  showCompleted: boolean;
  setQuestProgress(questProgress: QuestProgress): void;
  setFocusQuests(focusQuests: string[]): void;
  focusQuests: string[];
};

const campaigns: Faction[] = ["Korolev", "Osiris", "ICA"];

export const QuestView = ({
  questProgress,
  showCompleted,
  setQuestProgress,
  setFocusQuests,
  focusQuests,
}: Props) => {
  /**
   * A campaign is considered complete if every part of every quest is complete
   * @param campaign
   * @returns true if provided campaign is complete
   */
  const campaignComplete = (campaign: Faction): boolean => {
    return quests
      .filter((q) => q.campaign === campaign)
      .every((q) => questProgress[q.name] === q.parts.length);
  };

  const allQuestsComplete = campaigns.every((campaign) =>
    campaignComplete(campaign)
  );

  if (!showCompleted && allQuestsComplete) {
    return <div>Damn, you did all the quests. Nice.</div>;
  }

  return (
    <div className="quest-columns">
      {campaigns.map((campaign) => {
        if (campaignComplete(campaign) && !showCompleted) {
          return null;
        }
        return (
          <div key={campaign} className="quests">
            <h3>{campaign}</h3>
            {quests
              .filter((quest) => quest.campaign === campaign)
              .map((quest) => (
                <QuestListing
                  key={quest.name}
                  quest={quest}
                  questProgress={questProgress}
                  setQuestProgress={setQuestProgress}
                  showCompleted={showCompleted}
                  setFocusQuests={setFocusQuests}
                  focusQuests={focusQuests}
                />
              ))}
          </div>
        );
      })}
    </div>
  );
};
