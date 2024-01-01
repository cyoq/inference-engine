import { writable } from 'svelte/store';
import ForwardInference from './inference/ForwardInference';
import treeData from './data/tree';
import BackwardInference from './inference/BackwardInference';
import type { ProductionRule, TreeNode } from './types';

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

let bwInference = new BackwardInference(treeData);

function createBackwardInference() {
  const { subscribe, set, update } = writable<{
    currentNode: TreeNode;
    conclusions: string[];
    productionRules: ProductionRule[];
    visitedNodes: TreeNode[];
    hasInferenceStarted: boolean;
  }>({
    currentNode: bwInference.currentNode(),
    conclusions: bwInference.getConclusions(),
    productionRules: [],
    visitedNodes: [],
    hasInferenceStarted: false
  });

  return {
    subscribe,
    startInference: (conclusion: string) => {
      update((o) => ({
        ...o,
        productionRules: bwInference.getProductionRules(conclusion),
        visitedNodes: bwInference.getVisitedNodes(conclusion),
        hasInferenceStarted: true
      }));
    },
    reset: () => {
      bwInference = new BackwardInference(treeData);
      set({
        currentNode: bwInference.currentNode(),
        conclusions: bwInference.getConclusions(),
        productionRules: [],
        visitedNodes: [],
        hasInferenceStarted: false
      });
    }
  };
}

export const backwardInference = createBackwardInference();
