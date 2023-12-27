<script lang="ts">
	import * as d3 from 'd3';
	import treeData from '../data/tree-example';
	import type { TreeNode } from '../types';

	export let chartWidth: number = 660;
	export let chartHeight: number = 550;

	// set the dimensions and margins of the diagram
	const margin = { top: 20, right: 90, bottom: 30, left: 90 };
	$: width = chartWidth - margin.left - margin.right;
	$: height = chartHeight - margin.top - margin.bottom;

	$: treeMap = d3.tree<TreeNode>().size([width, height]);
	let nodes = d3.hierarchy(treeData, (d) => d.children);
	$: root = treeMap(nodes);

	function pathLine<T>(node: d3.HierarchyPointNode<T>): string {
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
			(node.parent ? node.parent.y : 0) +
			', ' +
			(node.parent ? node.parent.x : 0) +
			' ' +
			(node.parent ? node.parent.y : 0)
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
				transform="translate({node.x},{node.y})"
			>
				<!-- Adds a circle to the node -->
				<!-- <circle
					r={node.data.value}
					stroke={node.data.type}
					fill={node.data.level}
				/> -->
				<circle r="10" stroke="black" />

				<!-- Adds the text to the node -->
				<!-- We use relative coordinates because every node is translated absolutely already -->
				<text
					dy="0.35em"
					x={node.children ? -15 : -40}
					y={node.children && node.depth !== 0 ? -10 : 15}
					text-anchor={node.children ? 'end' : 'start'}>{node.data.name ?? 'Undefined'}</text
				>
			</g>
		{/each}
	</g>
</svg>

<style>
	.node circle {
		stroke: steelblue;
		stroke-width: 3px;
	}

	.node text {
		font: 16px sans-serif;
	}

	.link {
		fill: none;
		stroke: #ccc;
		stroke-width: 2px;
	}
</style>
