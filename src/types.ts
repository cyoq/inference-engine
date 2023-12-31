import type { ComponentType } from 'svelte';

export enum NodeType {
  Conclusion,
  Fact
}

export type ProductionRule = {
  facts: { name: string; value: string }[];
  conclusion: string;
};

export type TreeNode = {
  name: string;
  type: NodeType;
  edge: string | null;
  children: TreeNode[] | null;
};

export type TabItem = {
  label: string;
  index: number;
  component: ComponentType;
};
