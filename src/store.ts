import { writable } from 'svelte/store';
import ForwardInference from './ForwardInference';
import treeData from './data/tree-example';

let fwInference = new ForwardInference(treeData);

function createForwardInference() {
  const { subscribe, set, update } = writable({
    currentNode: fwInference.currentNode(),
    visitedNodes: fwInference.getVisitedNodes(),
    answers: fwInference.getEdges(),
    productionRules: fwInference.getProductionRules()
  });

  return {
    subscribe,
    next: (edge: string) => {
      fwInference.next(edge);
      update((_) => {
        return {
          currentNode: fwInference.currentNode(),
          visitedNodes: fwInference.getVisitedNodes(),
          answers: fwInference.getEdges(),
          productionRules: fwInference.getProductionRules()
        };
      });
    },
    reset: () => {
      fwInference = new ForwardInference(treeData);
      set({
        currentNode: fwInference.currentNode(),
        visitedNodes: fwInference.getVisitedNodes(),
        answers: fwInference.getEdges(),
        productionRules: fwInference.getProductionRules()
      });
    }
  };
}

export const forwardInference = createForwardInference();
