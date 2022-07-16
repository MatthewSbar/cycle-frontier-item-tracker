import { quests } from "./data";
import { PartName, Part, Quest } from "./types";

export class QuestForest {
  private constructor(private roots: QuestTree[]) {}

  /** Builds a quest forest from the {@link quests} data in data.tsx */
  static new(focusedQuests?: Set<string>): QuestForest {
    let questsCopy = JSON.parse(JSON.stringify(quests)) as Quest[];

    if (focusedQuests) {
      questsCopy = questsCopy.filter((quest) => focusedQuests.has(quest.name));
    }

    const roots: QuestTree[] = [];
    const questTreeMap = new Map<PartName, QuestTree>();

    // populate the quest tree map with empty quest trees
    questsCopy.forEach((quest) => {
      quest.parts.forEach((part) => {
        const questTree = new QuestTree(part);
        questTreeMap.set(part.name, questTree);
      });
    });

    // populate each quest tree with associated child trees
    questsCopy.forEach((quest) => {
      quest.parts.forEach((part) => {
        // Can safely assert the type here since we did a full loop above
        const currentTree = questTreeMap.get(part.name) as QuestTree;

        if (
          part.requires === null ||
          (focusedQuests && !questTreeMap.has(part.requires))
        ) {
          roots.push(currentTree);
          return;
        }

        const parentTree = questTreeMap.get(part.requires) as QuestTree;

        parentTree?.subtrees?.push(currentTree);
      });
    });

    return new QuestForest(roots);
  }

  /**
   * returns the first incomplete quest parts found in the tree, up to a certain depth, or until the end of the tree if depth is not specified.
   * @param completeQuestParts - A set of completed quest part name
   * @param depth
   */
  findIncompleteQuestParts(
    completeQuestParts: Set<PartName>,
    depth = Number.MAX_SAFE_INTEGER
  ): Part[] {
    const isQuestPartComplete = (part: Part) =>
      !completeQuestParts.has(part.name);

    return this.roots
      .map((root) => root.findFirsts(isQuestPartComplete))
      .flat()
      .map((incompleteQuestTree) => incompleteQuestTree.getParts(depth))
      .flat()
      .filter((part) => !completeQuestParts.has(part.name));
  }
}

class QuestTree {
  constructor(public part: Part, public subtrees: QuestTree[] = []) {}

  getParts(depth = Number.MAX_SAFE_INTEGER): Part[] {
    if (depth <= 1) {
      return [this.part];
    }

    return this.subtrees
      .map((subtree) => subtree.getParts(depth - 1))
      .flat()
      .concat(this.part);
  }

  /**
   * Finds the first quest trees which pass the input condition
   * @param condition
   */
  findFirsts(condition: (part: Part) => boolean): QuestTree[] {
    if (condition(this.part)) {
      return [this];
    }

    return this.subtrees.map((subtree) => subtree.findFirsts(condition)).flat();
  }
}
