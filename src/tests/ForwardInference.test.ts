import { describe, it, expect } from 'vitest';
import ForwardInference from '../inference/ForwardInference';
import treeData from '../data/tree-example';

describe('ForwardInference.next', () => {
  it('Get to leaf', () => {
    const inference = new ForwardInference(treeData);
    inference.next('Overcast');

    expect(inference.currentNode().name).toBe('Play?: Yes');
    expect(inference.getVisitedNodes().map((n) => n.name)).toEqual(['Outlook', 'Play?: Yes']);
  });

  it('Fail to next', () => {
    const inference = new ForwardInference(treeData);
    inference.next('Overcast');

    expect(() => inference.next('')).toThrowError('No such edge was found');
  });

  it('Full traversal to leaf', () => {
    const inference = new ForwardInference(treeData);
    inference.next('Sunny');
    inference.next('High');

    expect(inference.currentNode().name).toBe('Play?: No');
    expect(inference.getVisitedNodes().map((n) => n.name)).toEqual([
      'Outlook',
      'Humidity',
      'Play?: No'
    ]);
  });
});

describe('ForwardInference.getEdges', () => {
  it('Get root edges', () => {
    const inference = new ForwardInference(treeData);

    expect(inference.getEdges()).toEqual(['Sunny', 'Overcast', 'Rainy']);
  });

  it('Get humidity edges', () => {
    const inference = new ForwardInference(treeData);
    inference.next('Sunny');

    expect(inference.getEdges()).toEqual(['Normal', 'High']);
  });

  it('Get no edges from leaf', () => {
    const inference = new ForwardInference(treeData);
    inference.next('Sunny');
    inference.next('High');

    expect(inference.getEdges()).toBeUndefined();
  });
});

describe('ForwardInference.productionRules', () => {
  it('Get empty root production rules', () => {
    const inference = new ForwardInference(treeData);

    expect(inference.getProductionRules()).toEqual([]);
  });

  it('Get a production rule', () => {
    const inference = new ForwardInference(treeData);
    inference.next('Sunny');
    inference.next('High');

    expect(inference.getProductionRules()).toEqual([
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
      }
    ]);
  });
});
