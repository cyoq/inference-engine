import { NodeType, type TreeNode } from '../types';

const treeData: TreeNode = {
  name: 'Outlook',
  edge: null,
  type: NodeType.Condition,
  children: [
    {
      name: 'Humidity',
      edge: 'Sunny',
      type: NodeType.Condition,
      children: [
        {
          name: 'Play?: Yes',
          edge: 'Normal',
          type: NodeType.Conclusion,
          children: null
        },
        {
          name: 'Play?: No',
          edge: 'High',
          type: NodeType.Conclusion,
          children: null
        }
      ]
    },
    {
      name: 'Play?: Yes',
      edge: 'Overcast',
      type: NodeType.Conclusion,
      children: null
    },
    {
      name: 'Windy',
      edge: 'Rainy',
      type: NodeType.Condition,
      children: [
        {
          name: 'Play?: Yes',
          edge: 'False',
          type: NodeType.Conclusion,
          children: null
        },
        {
          name: 'Play?: No',
          edge: 'True',
          type: NodeType.Conclusion,
          children: null
        }
      ]
    }
  ]
};

export default treeData;
