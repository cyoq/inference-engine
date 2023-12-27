<script lang="ts">
	import * as d3 from 'd3';
	import treeData from '../data/tree-example';
	import type { TreeNode } from '../types';

	export let chartWidth: number = 660;
	export let chartHeight: number = 550;
	export let rectWidth: number = 60;
	export let rectHeight: number = 30;

	// set the dimensions and margins of the diagram
	const margin = { top: 20, right: 90, bottom: 40, left: 90 };
	$: width = chartWidth - margin.left - margin.right;
	$: height = chartHeight - margin.top - margin.bottom;

	$: treeMap = d3.tree<TreeNode>().size([width, height]);
	let nodes = d3.hierarchy(treeData, (d) => d.children);
	$: root = treeMap(nodes);

	function pathLine<T>(node: d3.HierarchyPointNode<T>): string {
		// First point goes from a child
		// Second point is a control point from a child
		// Third point is a control point from a parent
		// Fourth point is a point to a parent if he exists
		return (
			'M' +
			node.x +
			' ' +
			node.y +
			'C' +
			(node.x + (node.parent ? node.parent.x : 0)) / 2 +
			' ' +
			node.y +
			', ' +
			(node.x + (node.parent ? node.parent.x : 0)) / 2 +
			' ' +
			(node.parent ? node.parent.y + rectHeight : 0) +
			', ' +
			(node.parent ? node.parent.x : 0) +
			' ' +
			(node.parent ? node.parent.y + rectHeight : 0)
		);
	}
</script>

<svg width={width + margin.left + margin.right} height={height + margin.bottom + margin.top}>
	<g transform="translate({margin.left},{margin.top})">
		<!-- Adds the links between the nodes -->
		{#each root.descendants().slice(1) as link}
			<path class="link" style="stroke: black;" d={pathLine(link)} />
		{/each}

		<!-- Adds each node as a group -->
		{#each root.descendants() as node}
			<g
				class="node {node.children ? 'node-internal' : 'node-leaf'}"
				transform="translate({node.x - rectWidth / 2},{node.y})"
			>
				<!-- Adds a shape to the node -->
				<rect width={rectWidth} height={rectHeight} fill="none" stroke="black" stroke-width="1" />

				<!-- Adds the text to the node -->
				<!-- We use relative coordinates because every node is translated absolutely already -->
				<text dy="0.35em" x={rectWidth / 2} y={rectHeight / 2} text-anchor="middle"
					>{node.data.name ?? 'Undefined'}</text
				>
			</g>
		{/each}
	</g>
</svg>

<style>
	.node rect {
		stroke: blueviolet;
		stroke-width: 3px;
	}

	.node text {
		font: 12px sans-serif;
	}

	.link {
		fill: none;
		stroke: #ccc;
		stroke-width: 2px;
	}
</style>
