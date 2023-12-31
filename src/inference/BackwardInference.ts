import { NodeType, type ProductionRule, type TreeNode } from '../types';

export default class BackwardInference {
  private data: TreeNode;

  constructor(data: TreeNode) {
    this.data = data;
  }

  getVisitedNodes(conclusion: string): TreeNode[] {
    const paths = this.getPaths(conclusion);

    return [...new Set(paths.flat())];
  }

  getPaths(conclusion: string): TreeNode[][] {
    if (!this.getConclusions().includes(conclusion)) {
      throw new Error('Such conclusion does not exist!');
    }

    const queue: TreeNode[][] = [[this.data]];
    const paths: TreeNode[][] = [];

    while (queue.length !== 0) {
      const path = queue.shift();

      const node = path![path!.length - 1];

      if (node!.name === conclusion) {
        paths.push(path!);
      }

      for (const child of node!.children ?? []) {
        const newPath = [...path!];
        newPath.push(child);
        queue.push(newPath);
      }
    }

    return paths;
  }

  getConclusions(): string[] {
    return [...new Set(this._fetchConclusions(this.data))];
  }

  private _fetchConclusions(node: TreeNode): string[] {
    let result: string[] = [];

    for (const child of node.children ?? []) {
      result = result.concat(this._fetchConclusions(child));
    }

    if (node.type === NodeType.Conclusion) {
      return result.concat([node.name]);
    }

    return result;
  }

  currentNode(): TreeNode {
    return this.data;
  }

  getProductionRules(conclusion: string): ProductionRule[] {
    const productionRules: ProductionRule[] = [];

    const paths = this.getPaths(conclusion);

    for (const path of paths) {
      let productionRule: ProductionRule = {
        facts: [{ name: path[0].name, value: '' }],
        conclusion: ''
      };

      for (let i = 1; i < path.length; ++i) {
        const node = path[i];

        switch (node.type) {
          case NodeType.Fact:
            productionRule.facts[productionRule.facts.length - 1].value = node.edge!;
            productionRule.facts.push({ name: node.name, value: '' });
            break;
          case NodeType.Conclusion:
            productionRule.facts[productionRule.facts.length - 1].value = node.edge!;

            productionRule.conclusion = node.name;
            productionRules.push(productionRule);
            productionRule = { facts: [], conclusion: '' };
            break;
          default:
            throw new Error('Non-existent key for NodeType');
        }
      }
    }

    return productionRules;
  }
}
