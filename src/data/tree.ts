import { NodeType, type TreeNode } from '../types';

const treeData: TreeNode = {
  name: 'Door opening',
  edge: null,
  prompt: 'What is used for door opening?',
  type: NodeType.Fact,
  children: [
    {
      name: 'Correct key?',
      edge: 'Door key',
      prompt: 'Is it the correct door key?',
      type: NodeType.Fact,
      children: [
        {
          name: 'Door closed',
          edge: 'No',
          prompt: 'Door is closed, you cannot enter.',
          type: NodeType.Conclusion,
          children: null
        },
        {
          name: 'Door opened',
          edge: 'Yes',
          prompt: 'Door is opened, you can enter.',
          type: NodeType.Conclusion,
          children: [
            {
              name: 'Call support',
              edge: 'No',
              prompt: 'Door stuck, call the support to solve an issue.',
              type: NodeType.Conclusion,
              children: null
            },
            {
              name: 'Person inside?',
              edge: 'Yes',
              prompt: 'Has a person went inside in 5 minutes?',
              type: NodeType.Fact,
              children: [
                {
                  name: 'Send alert',
                  edge: '> 5 min',
                  prompt: 'Person has not come in. Sending an alert.',
                  type: NodeType.Conclusion,
                  children: null
                },
                {
                  name: 'Lights',
                  edge: '<= 5 min',
                  prompt: 'Lights are turned on.',
                  type: NodeType.Conclusion,
                  children: [
                    {
                      name: 'Fix a bulb',
                      edge: 'No',
                      prompt: 'Something wrong with the bulb. Please, fix it.',
                      type: NodeType.Conclusion,
                      children: null
                    },
                    {
                      name: 'Adjust things',
                      edge: 'Yes',
                      prompt: 'Is it needed to adjust something?',
                      type: NodeType.Fact,
                      children: [
                        {
                          name: 'Temperature OK?',
                          edge: 'Temperature',
                          prompt: 'Is temperature OK in the apartment?',
                          type: NodeType.Fact,
                          children: [
                            {
                              name: 'Lower temp',
                              edge: 'High',
                              prompt: 'Lower the temperature in the apartment.',
                              type: NodeType.Conclusion,
                              children: null
                            },
                            {
                              name: 'Increase temp',
                              edge: 'Low',
                              prompt: 'Increase the temperature in the apartment.',
                              type: NodeType.Conclusion,
                              children: null
                            }
                          ]
                        },
                        {
                          name: 'Humidity OK?',
                          edge: 'Humidity',
                          prompt: 'Is humidity OK in the apartment?',
                          type: NodeType.Fact,
                          children: [
                            {
                              name: 'Use air dryer',
                              edge: 'High',
                              prompt: 'Use air dryer to lessen the humidity.',
                              type: NodeType.Conclusion,
                              children: null
                            },
                            {
                              name: 'Use air humidifier',
                              edge: 'Low',
                              prompt: 'Use air humidifier to inc the humidity.',
                              type: NodeType.Conclusion,
                              children: null
                            }
                          ]
                        },
                        {
                          name: 'Dark outside?',
                          edge: 'Curtains',
                          prompt: 'Is it dark outside?',
                          type: NodeType.Fact,
                          children: [
                            {
                              name: 'Close curtains',
                              edge: 'Yes',
                              prompt: 'Close the curtains',
                              type: NodeType.Conclusion,
                              children: null
                            },
                            {
                              name: 'Dont close curtains',
                              edge: 'No',
                              prompt: 'Do not close the curtains, as it is not dark',
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
      prompt: 'Is it an owner?',
      type: NodeType.Fact,
      children: [
        {
          name: 'Door closed',
          edge: 'No',
          prompt: 'Door is closed, you cannot enter.',
          type: NodeType.Conclusion,
          children: null
        },
        {
          name: 'Misconfigured',
          edge: 'Yes',
          prompt: 'Operation does not work yet.',
          type: NodeType.Conclusion,
          children: null
        }
      ]
    },
    {
      name: 'Owner?',
      edge: 'Facial recognition',
      prompt: 'Is it an owner?',
      type: NodeType.Fact,
      children: [
        {
          name: 'Door closed',
          edge: 'No',
          prompt: 'Door is closed, you cannot enter.',
          type: NodeType.Conclusion,
          children: null
        },
        {
          name: 'Misconfigured',
          edge: 'Yes',
          prompt: 'Operation does not work yet.',
          type: NodeType.Conclusion,
          children: null
        }
      ]
    }
  ]
};

export default treeData;
