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
