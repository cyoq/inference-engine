import { NodeType, type TreeNode } from '../types';

const treeData: TreeNode = {
	name: 'Outlook',
	type: NodeType.Condition,
	children: {
		Sunny: {
			name: 'Humidity',
			type: NodeType.Condition,
			children: {
				Normal: {
					name: 'Play?: Yes',
					type: NodeType.Conclusion,
					children: null
				},
				High: {
					name: 'Play?: No',
					type: NodeType.Conclusion,
					children: null
				}
			}
		},
		Overcast: {
			name: 'Play?: Yes',
			type: NodeType.Conclusion,
			children: null
		},
		Rainy: {
			name: 'Windy',
			type: NodeType.Condition,
			children: {
				False: {
					name: 'Play?: Yes',
					type: NodeType.Conclusion,
					children: null
				},
				True: {
					name: 'Play?: No',
					type: NodeType.Conclusion,
					children: null
				}
			}
		}
	}
};

export default treeData;
