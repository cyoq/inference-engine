import { NodeType, type TreeNode } from '../types';

const treeData: TreeNode = {
  name: 'Outlook',
  edge: null,
  question: 'How is the Outlook outside?',
  conclusion: null,
  type: NodeType.Fact,
  children: [
    {
      name: 'Humidity',
      edge: 'Sunny',
      question: 'How is the humidity outside?',
      conclusion: null,
      type: NodeType.Fact,
      children: [
        {
          name: 'Play?: Yes',
          edge: 'Normal',
          question: null,
          conclusion: 'It is safe to play',
          type: NodeType.Conclusion,
          children: null
        },
        {
          name: 'Play?: No',
          edge: 'High',
          question: null,
          conclusion: 'It is better not to play',
          type: NodeType.Conclusion,
          children: null
        }
      ]
    },
    {
      name: 'Play?: Yes',
      edge: 'Overcast',
      question: null,
      conclusion: 'It is safe to play',
      type: NodeType.Conclusion,
      children: null
    },
    {
      name: 'Windy',
      question: 'Is it windy outside?',
      edge: 'Rainy',
      conclusion: null,
      type: NodeType.Fact,
      children: [
        {
          name: 'Play?: Yes',
          edge: 'False',
          question: null,
          conclusion: 'It is safe to play',
          type: NodeType.Conclusion,
          children: null
        },
        {
          name: 'Play?: No',
          edge: 'True',
          conclusion: 'It is better not to play',
          question: null,
          type: NodeType.Conclusion,
          children: null
        }
      ]
    }
  ]
};

export default treeData;
