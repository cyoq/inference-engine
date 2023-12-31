import { describe, it, expect } from 'vitest';
import treeData from '../data/tree-example';
import BackwardInference from '../inference/BackwardInference';

describe('BackwardInference.getConclusions', () => {
  it('Get all conclusions', () => {
    const inference = new BackwardInference(treeData);

    expect(inference.getConclusions()).toEqual(['Play?: Yes', 'Play?: No']);
  });
});

describe('BackwardInference.getPaths', () => {
  it('Get all paths to the "Play?: No" conclusion ', () => {
    const inference = new BackwardInference(treeData);

    expect(inference.getPaths('Play?: No').map((p) => p.map((e) => e.name))).toEqual([
      ['Outlook', 'Humidity', 'Play?: No'],
      ['Outlook', 'Windy', 'Play?: No']
    ]);
  });

  it('Get all paths to the "Play?: Yes" conclusion ', () => {
    const inference = new BackwardInference(treeData);

    expect(inference.getPaths('Play?: Yes').map((p) => p.map((e) => e.name))).toEqual([
      ['Outlook', 'Play?: Yes'],
      ['Outlook', 'Humidity', 'Play?: Yes'],
      ['Outlook', 'Windy', 'Play?: Yes']
    ]);
  });
});

describe('BackwardInference.getProductionRules', () => {
  it('Get all production rules to "Play?: No"', () => {
    const inference = new BackwardInference(treeData);

    expect(inference.getProductionRules('Play?: No')).toEqual([
      {
        facts: [
          {
            name: 'Outlook',
            value: 'Sunny'
          },
          {
            name: 'Humidity',
            value: 'High'
          }
        ],
        conclusion: 'Play?: No'
      },
      {
        facts: [
          {
            name: 'Outlook',
            value: 'Rainy'
          },
          {
            name: 'Windy',
            value: 'True'
          }
        ],
        conclusion: 'Play?: No'
      }
    ]);
  });

  it('Get all production rules to the "Play?: Yes" conclusion ', () => {
    const inference = new BackwardInference(treeData);

    expect(inference.getProductionRules('Play?: Yes').sort()).toEqual([
      {
        facts: [
          {
            name: 'Outlook',
            value: 'Overcast'
          }
        ],
        conclusion: 'Play?: Yes'
      },
      {
        facts: [
          {
            name: 'Outlook',
            value: 'Sunny'
          },
          {
            name: 'Humidity',
            value: 'Normal'
          }
        ],
        conclusion: 'Play?: Yes'
      },
      {
        facts: [
          {
            name: 'Outlook',
            value: 'Rainy'
          },
          {
            name: 'Windy',
            value: 'False'
          }
        ],
        conclusion: 'Play?: Yes'
      }
    ]);
  });
});
