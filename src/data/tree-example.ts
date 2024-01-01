import { NodeType, type TreeNode } from '../types';

const treeData: TreeNode = {
  name: 'Outlook',
  edge: null,
  prompt: 'How is the Outlook outside?',
  type: NodeType.Fact,
  children: [
    {
      name: 'Humidity',
      edge: 'Sunny',
      prompt: 'How is the humidity outside?',
      type: NodeType.Fact,
      children: [
        {
          name: 'Play?: Yes',
          edge: 'Normal',
          prompt: 'It is safe to play',
          type: NodeType.Conclusion,
          children: null
        },
        {
          name: 'Play?: No',
          edge: 'High',
          prompt: 'It is better not to play',
          type: NodeType.Conclusion,
          children: null
        }
      ]
    },
    {
      name: 'Play?: Yes',
      edge: 'Overcast',
      prompt: 'It is safe to play',
      type: NodeType.Conclusion,
      children: null
    },
    {
      name: 'Windy',
      prompt: 'Is it windy outside?',
      edge: 'Rainy',
      type: NodeType.Fact,
      children: [
        {
          name: 'Play?: Yes',
          edge: 'False',
          prompt: 'It is safe to play',
          type: NodeType.Conclusion,
          children: null
        },
        {
          name: 'Play?: No',
          edge: 'True',
          prompt: 'It is better not to play',
          type: NodeType.Conclusion,
          children: null
        }
      ]
    }
  ]
};

export default treeData;
