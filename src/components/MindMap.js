import React, { useState } from "react";
import ReactFlow, { Controls } from "reactflow";

import "reactflow/dist/style.css";
import "tailwindcss/tailwind.css";
import MindMapNode from "./MindMapNode";
import { nodeData } from "../assets/data";
import { useView } from "../context/viewContext";

export default function MindMap() {
  const { alignment, setAlignment } = useView();
  const [expandedNodes, setExpandedNodes] = useState(new Set(["0"]));

  const generateNodes = (node, alignment) => {
    const nodes = [];
    const { id, label, positionH, positionV, info, stat, children, className } =
      node;

    const position = alignment === "horizontal" ? positionH : positionV;

    nodes.push({
      id,
      data: { label, info, stat },
      position,
      className,
    });

    if (children) {
      for (const child of children) {
        nodes.push(...generateNodes(child, alignment));
      }
    }

    return nodes;
  };

  const generateEdges = (node, parentId = null) => {
    const edges = [];
    const { id, children } = node;

    if (parentId !== null) {
      edges.push({
        id: `${parentId}-${id}`,
        source: parentId,
        target: id,
        style: { stroke: "#94a3b8", strokeWidth: 3 },
      });
    }

    if (children) {
      for (const child of children) {
        edges.push(...generateEdges(child, id));
      }
    }

    return edges;
  };

  const getVisibleNodes = (node, expandedNodes) => {
    const visibleNodes = [];
    const { id, label, positionH, positionV, info, stat, children, className } =
      node;

    const position = alignment === "horizontal" ? positionH : positionV;

    visibleNodes.push({
      id,
      data: { label, info, stat },
      position,
      className,
    });

    if (children) {
      if (expandedNodes.has(id)) {
        for (const child of children) {
          visibleNodes.push(...getVisibleNodes(child, expandedNodes));
        }
      }
    }

    return visibleNodes;
  };

  const toggleNodeExpansion = (nodeId) => {
    setExpandedNodes((prevExpandedNodes) => {
      const newExpandedNodes = new Set(prevExpandedNodes);
      if (newExpandedNodes.has(nodeId)) {
        newExpandedNodes.delete(nodeId);
      } else {
        newExpandedNodes.add(nodeId);
      }
      return newExpandedNodes;
    });
  };

  const nodes = getVisibleNodes(nodeData, expandedNodes);
  const edges = generateEdges(nodeData);

  return (
    <div className="container w-full h-full min-w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{
          input: MindMapNode,
          default: MindMapNode,
        }}
        fitView={true}
        onNodeClick={(event, node) => toggleNodeExpansion(node.id)}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}
