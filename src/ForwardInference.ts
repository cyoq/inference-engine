import { NodeType, type ProductionRule, type TreeNode } from './types';

export default class ForwardInference {
  private data: TreeNode;
  private visitedNodes: TreeNode[];

  constructor(data: TreeNode) {
    this.data = data;
    this.visitedNodes = [data];
  }

  next(edge: string) {
    if (this.getEdges()?.find((e) => e == edge) === undefined) {
      throw new Error('No such edge was found');
    }

    if (this.data.children === null || this.data.children === undefined) {
      return;
    }

    const nextChild = this.data.children.find((c) => c.edge == edge)!;
    this.visitedNodes.push(nextChild);
    this.data = nextChild;
  }

  getEdges(): string[] | null | undefined {
    return this.data.children?.map((c) => c.edge!);
  }

  currentNode(): TreeNode {
    return this.data;
  }

  getVisitedNodes(): TreeNode[] {
    return this.visitedNodes;
  }

  isLeaf(): boolean {
    return this.data.children === null;
  }

  getProductionRules(): ProductionRule[] {
    const productionRules: ProductionRule[] = [];

    let productionRule: ProductionRule = {
      facts: [{ name: this.visitedNodes[0].name, value: '' }],
      conclusion: ''
    };

    for (let i = 1; i < this.visitedNodes.length; ++i) {
      const node = this.visitedNodes[i];

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

    return productionRules;
  }
}
