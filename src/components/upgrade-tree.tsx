import { upgrades } from "../data";
import { Upgrade, UpgradeProgress } from "../types";
import { Icon } from "./icon";
import { ItemChip } from "./item-chip";

type Props = {
  upgrade: Upgrade;
  upgradeProgress: UpgradeProgress;
  setUpgradeProgress(upgradeProgress: UpgradeProgress): void;
  showCompleted: boolean;
  name: string;
};

export const UpgradeTree = ({
  upgrade,
  upgradeProgress,
  setUpgradeProgress,
  showCompleted,
  name,
}: Props) => {
  const handleUpdateUpgradeProgress = (
    tree: string,
    stage: number,
    level: number
  ) => {
    const upgradeProgressCopy = JSON.parse(JSON.stringify(upgradeProgress));
    upgradeProgressCopy[tree][stage] = level;
    setUpgradeProgress(upgradeProgressCopy);
  };

  const upgradeCompleted = (): boolean => {
    return upgrade.stages.every((_stage, i) => stageCompleted(i));
  };

  const stageCompleted = (stage: number): boolean => {
    return (
      upgradeProgress[upgrade.tree][stage] >=
      upgrades.find((u) => u.tree === upgrade.tree)!.stages[stage].levels.length
    );
  };

  const levelCompleted = (stage: number, level: number): boolean => {
    return upgradeProgress[upgrade.tree][stage] > level;
  };

  if (upgradeCompleted() && !showCompleted) {
    return null;
  }

  return (
    <>
      <h3>{name}</h3>
      <div
        key={upgrade.tree}
        className={`quest-listing tree ${
          upgradeCompleted() ? "completed" : null
        }`}
      >
        {upgrade.stages.map(
          (stage, i) =>
            (!stageCompleted(i) || showCompleted) && (
              <div key={`${upgrade.tree}stage${i}`}>
                <details>
                  <summary
                    className={stageCompleted(i) ? "completed" : undefined}
                  >
                    <h4>Tier {i + 1}</h4>
                    <br />
                    <span className="inline-flex">
                      Levels completed:{" "}
                      <button
                        disabled={upgradeProgress[upgrade.tree][i] === 0}
                        onClick={() =>
                          handleUpdateUpgradeProgress(upgrade.tree, i, 0)
                        }
                      >
                        <span className="material-symbols-outlined negative">
                          fast_rewind
                        </span>
                      </button>
                      <button
                        disabled={upgradeProgress[upgrade.tree][i] === 0}
                        onClick={() =>
                          handleUpdateUpgradeProgress(
                            upgrade.tree,
                            i,
                            upgradeProgress[upgrade.tree][i] - 1
                          )
                        }
                      >
                        <span className="material-symbols-outlined negative">
                          remove
                        </span>
                      </button>{" "}
                      <span className="upgrade-level">
                        {upgradeProgress[upgrade.tree][i]} /{" "}
                        {
                          upgrades.find((u) => u.tree === upgrade.tree)?.stages[
                            i
                          ].levels.length
                        }
                      </span>
                      <button
                        disabled={
                          upgradeProgress[upgrade.tree][i] >=
                          upgrades.find((u) => u.tree === upgrade.tree)!.stages[
                            i
                          ].levels.length
                        }
                        onClick={() =>
                          handleUpdateUpgradeProgress(
                            upgrade.tree,
                            i,
                            upgradeProgress[upgrade.tree][i] + 1
                          )
                        }
                      >
                        <span className="material-symbols-outlined positive">
                          add
                        </span>
                      </button>
                      <button
                        disabled={stageCompleted(i)}
                        onClick={() =>
                          handleUpdateUpgradeProgress(
                            upgrade.tree,
                            i,
                            stage.levels.length
                          )
                        }
                      >
                        <span className="material-symbols-outlined positive">
                          fast_forward
                        </span>
                      </button>
                    </span>
                  </summary>

                  <ul>
                    {stage.levels.map(
                      (level, j) =>
                        (!levelCompleted(i, j) || showCompleted) && (
                          <li key={j}>
                            {levelCompleted(i, j) && <Icon name="done" />}level{" "}
                            {j + 1}
                            <ul>
                              {level.items.map((item, k) => (
                                <li key={`${upgrade.tree}stage${i}item${k}`}>
                                  <span>{item.quantity} <ItemChip name={item.item}/></span>
                                </li>
                              ))}
                            </ul>
                          </li>
                        )
                    )}
                  </ul>
                </details>
              </div>
            )
        )}
        {upgradeCompleted() ? <Icon name="done" /> : null}
      </div>
    </>
  );
};
