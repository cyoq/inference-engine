import type { ComponentType } from 'svelte';

export enum NodeType {
  Conclusion = 'conclusion',
  Condition = 'condition'
}

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
