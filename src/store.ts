import { writable } from 'svelte/store';
import ForwardInference from './ForwardInference';
import treeData from './data/tree-example';

let fwInference = new ForwardInference(treeData);

function createForwardInference() {
  const { subscribe, set, update } = writable({
    currentNode: fwInference.currentNode(),
    visitedNodes: fwInference.getVisitedNodes(),
    answers: fwInference.getEdges(),
    productionRules: fwInference.getProductionRules(),
    hasInferenceStarted: false
  });

  return {
    subscribe,
    startInference: () => {
      update((o) => ({
        ...o,
        hasInferenceStarted: true
      }));
    },
    next: (edge: string) => {
      fwInference.next(edge);
      update((_) => ({
        currentNode: fwInference.currentNode(),
        visitedNodes: fwInference.getVisitedNodes(),
        answers: fwInference.getEdges(),
        productionRules: fwInference.getProductionRules(),
        hasInferenceStarted: true
      }));
    },
    reset: () => {
      fwInference = new ForwardInference(treeData);
      set({
        currentNode: fwInference.currentNode(),
        visitedNodes: fwInference.getVisitedNodes(),
        answers: fwInference.getEdges(),
        productionRules: fwInference.getProductionRules(),
        hasInferenceStarted: false
      });
    }
  };
}

export const forwardInference = createForwardInference();
