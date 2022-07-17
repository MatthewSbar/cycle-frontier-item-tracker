import { Upgrade, UpgradeLevel, UpgradeProgress, UpgradeTreeName } from "./types";
import { upgrades } from "./data";

export class UpgradeForest {
  private constructor(private roots: UpgradeTree[]) {
  }

  /** Builds an upgrade forest from the {@link upgrades} data in data.tsx */
  static new(): UpgradeForest {
    let upgradesCopy = JSON.parse(JSON.stringify(upgrades)) as Upgrade[];

    const baseNodes: UpgradeTree[] = [];

    upgradesCopy.forEach(upgradeTree => {
      const levels: UpgradeLevel[] = upgradeTree.stages
        .map(stage => stage.levels)
        .flat();

      let previousNode: UpgradeTree;

      levels.forEach(level => {
        const node = new UpgradeTree(upgradeTree.tree, level, null);

        if (typeof previousNode === 'undefined') {
          baseNodes.push(node);
        } else {
          previousNode.subtree = node;
        }

        previousNode = node;
      });
    });

    return new UpgradeForest(baseNodes);
  }

  /**
   * returns the first incomplete quest levels found in the tree, up to a certain depth or until the end of the tree if depth is not specified.
   * @param upgradeProgress - Upgrade progress object stored in localstorage
   * @param depth
   */
  findIncompleteUpgradeLevels(
    upgradeProgress: UpgradeProgress,
    depth = Number.MAX_SAFE_INTEGER
  ): UpgradeLevel[] {

    return this.roots
      .map(root => root.findFirst(upgradeProgress))
      .map(rootRelativeToProgress =>
        rootRelativeToProgress?.getLevels(depth) ?? []
      )
      .flat();
  }
}

class UpgradeTree {
  constructor(public treeName: UpgradeTreeName, public level: UpgradeLevel, public subtree: UpgradeTree | null) {
  }

  /**
   * Find the first incomplete upgrade in the tree based on upgradeProgress
   * @param upgradeProgress
   */
  findFirst(upgradeProgress: UpgradeProgress): UpgradeTree | null {
    const progress = upgradeProgress[this.treeName];

    const upgrade = upgrades.find(upgrade => upgrade.tree === this.treeName);
    const stageCount = upgrade?.stages?.length ?? 0;

    let startingDepth = 0;
    let totalLevels = 0;

    // find where to start in the tree by adding the values in upgradeProgress to startingDepth
    for (let stageIndex = 0; stageIndex < stageCount; stageIndex++) {
      const stage = upgrade?.stages[stageIndex];
      const stageLevelCount = stage?.levels.length ?? 0;
      totalLevels += stageLevelCount;

      if ((progress[stageIndex] ?? 0) === stageLevelCount) {
        startingDepth += stageLevelCount;
      } else {
        startingDepth += progress[stageIndex];
        break;
      }
    }

    // all levels complete
    if (startingDepth === totalLevels) {
      return null;
    }

    return this.getTree(startingDepth);
  }

  /**
   * Gets the tree at the specified depth. If attempting to traverse past the last tree, return the last tree.
   * @param depth
   */
  getTree(depth: number): UpgradeTree {
    if (depth <= 0) {
      return this;
    }

    return this.subtree?.getTree(depth  - 1) ?? this;
  }

  getLevels(depth: number): UpgradeLevel[] {
    if (depth <= 1) {
      return [ this.level ];
    }

    const subLevels = this.subtree?.getLevels(depth - 1) ?? [];

    return [ this.level ].concat(subLevels);
  }
}
