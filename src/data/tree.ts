import { NodeType, type TreeNode } from '../types';

const treeData: TreeNode = {
  name: 'Door opening',
  edge: null,
  question: 'What is used for door opening?',
  conclusion: null,
  type: NodeType.Fact,
  children: [
    {
      name: 'Correct key?',
      edge: 'Door key',
      question: 'Is it the correct door key?',
      conclusion: null,
      type: NodeType.Fact,
      children: [
        {
          name: 'Door closed',
          edge: 'No',
          question: null,
          conclusion: 'Door is closed, you cannot enter.',
          type: NodeType.Conclusion,
          children: null
        },
        {
          name: 'Door opened',
          edge: 'Yes',
          question: 'Can you open the door?',
          conclusion: 'Door is opened, you can enter.',
          type: NodeType.Conclusion,
          children: [
            {
              name: 'Call support',
              edge: 'No',
              question: null,
              conclusion: 'Door stuck, call the support to solve an issue.',
              type: NodeType.Conclusion,
              children: null
            },
            {
              name: 'Person inside?',
              edge: 'Yes',
              question: 'Has a person went inside in 5 minutes?',
              conclusion: null,
              type: NodeType.Fact,
              children: [
                {
                  name: 'Send alert',
                  edge: '> 5 min',
                  question: null,
                  conclusion: 'Person has not come in. Sending an alert to owner.',
                  type: NodeType.Conclusion,
                  children: null
                },
                {
                  name: 'Lights',
                  edge: '<= 5 min',
                  question: 'Are lights working?',
                  conclusion: 'Lights are turned on.',
                  type: NodeType.Conclusion,
                  children: [
                    {
                      name: 'Fix a bulb',
                      edge: 'No',
                      question: null,
                      conclusion: 'Something wrong with the bulb. Please, fix it.',
                      type: NodeType.Conclusion,
                      children: null
                    },
                    {
                      name: 'Adjust things',
                      edge: 'Yes',
                      question: 'Is it needed to adjust something?',
                      conclusion: null,
                      type: NodeType.Fact,
                      children: [
                        {
                          name: 'Temperature OK?',
                          edge: 'Temperature',
                          question: 'Is temperature OK in the apartment?',
                          conclusion: null,
                          type: NodeType.Fact,
                          children: [
                            {
                              name: 'Lower temp',
                              edge: 'High',
                              question: null,
                              conclusion: 'Lower the temperature in the apartment.',
                              type: NodeType.Conclusion,
                              children: null
                            },
                            {
                              name: 'Increase temp',
                              edge: 'Low',
                              question: null,
                              conclusion: 'Increase the temperature in the apartment.',
                              type: NodeType.Conclusion,
                              children: null
                            }
                          ]
                        },
                        {
                          name: 'Great!',
                          edge: 'No',
                          question: null,
                          conclusion: 'Have a nice day!',
                          type: NodeType.Conclusion,
                          children: null
                        },
                        {
                          name: 'Humidity OK?',
                          edge: 'Humidity',
                          question: 'Is humidity OK in the apartment?',
                          conclusion: null,
                          type: NodeType.Fact,
                          children: [
                            {
                              name: 'Use air dryer',
                              edge: 'High',
                              question: null,
                              conclusion: 'Use air dryer to lessen humidity.',
                              type: NodeType.Conclusion,
                              children: null
                            },
                            {
                              name: 'Use air humidifier',
                              edge: 'Low',
                              question: null,
                              conclusion: 'Use air humidifier to increase humidity.',
                              type: NodeType.Conclusion,
                              children: null
                            }
                          ]
                        },
                        {
                          name: 'Dark outside?',
                          edge: 'Curtains',
                          question: 'Is it dark outside?',
                          conclusion: null,
                          type: NodeType.Fact,
                          children: [
                            {
                              name: 'Close curtains',
                              edge: 'Yes',
                              question: null,
                              conclusion: 'Close the curtains',
                              type: NodeType.Conclusion,
                              children: null
                            },
                            {
                              name: 'Dont close curtains',
                              edge: 'No',
                              question: null,
                              conclusion: 'Do not close the curtains, as it is not dark',
                              type: NodeType.Conclusion,
                              children: null
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Owner?',
      edge: 'Fingerprint',
      question: 'Is it an owner?',
      conclusion: null,
      type: NodeType.Fact,
      children: [
        {
          name: 'Door closed',
          edge: 'No',
          question: null,
          conclusion: 'Door is closed, you cannot enter.',
          type: NodeType.Conclusion,
          children: null
        },
        {
          name: 'Misconfigured',
          edge: 'Yes',
          question: null,
          conclusion: 'Operation does not work yet.',
          type: NodeType.Conclusion,
          children: null
        }
      ]
    },
    {
      name: 'Owner?',
      edge: 'Facial recognition',
      question: 'Is it an owner?',
      conclusion: null,
      type: NodeType.Fact,
      children: [
        {
          name: 'Door closed',
          edge: 'No',
          question: null,
          conclusion: 'Door is closed, you cannot enter.',
          type: NodeType.Conclusion,
          children: null
        },
        {
          name: 'Misconfigured',
          edge: 'Yes',
          question: null,
          conclusion: 'Operation does not work yet.',
          type: NodeType.Conclusion,
          children: null
        }
      ]
    }
  ]
};

export default treeData;
