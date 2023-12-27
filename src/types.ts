export enum NodeType {
	Conclusion = 'conclusion',
	Condition = 'condition'
}

export type TreeNode = {
	name: string;
	type: NodeType;
	children: { [key: string]: TreeNode } | null;
};
