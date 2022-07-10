import { upgrades } from "../data";
import { UpgradeProgress } from "../types";
import { UpgradeTree } from "./upgrade-tree";

type Props = {
  upgradeProgress: UpgradeProgress;
  setUpgradeProgress(upgradeProgress: UpgradeProgress): void;
  showCompleted: boolean;
};

// {viewMode === "upgrade" &&
//                && (
//
//               )}

export const UpgradeView = ({
  upgradeProgress,
  setUpgradeProgress,
  showCompleted,
}: Props) => {
  /**
   * @returns true if every level of every stage of every upgrade is complete
   */
  const allUpgradesComplete = (): boolean => {
    return upgrades.every((u) =>
      u.stages.every((s, i) => upgradeProgress[u.tree][i] === s.levels.length)
    );
  };

  if (!showCompleted && allUpgradesComplete()) {
    return <div>Damn, you got all the upgrades. Nice.</div>;
  }

  return (
    <div className="upgrade-grid">
      {upgrades.map((upgrade) => (
        <div key={upgrade.tree} className="upgrade-column">
          <UpgradeTree
            upgrade={upgrade}
            upgradeProgress={upgradeProgress}
            setUpgradeProgress={setUpgradeProgress}
            showCompleted={showCompleted}
            name={upgrade.tree}
          />
        </div>
      ))}
    </div>
  );
};
