import { useState, useEffect } from "react";

const nodes = [
  {
    id: "llm",
    label: "LLM",
    tooltip: "Large Language Models",
    x: 340,
    y: 85,
    mobileX: 185,
    mobileY: 45,
    color: "#3b82f6",
  },
  {
    id: "vector",
    label: "VECTOR SEARCH",
    tooltip: "Semantic Vector Retrieval",
    x: 155,
    y: 235,
    mobileX: 60,
    mobileY: 150,
    color: "#f59e0b",
  },
  {
    id: "rag",
    label: "RAG",
    tooltip: "Retrieval Augmented Generation",
    x: 525,
    y: 235,
    mobileX: 310,
    mobileY: 150,
    color: "#06b6d4",
  },
  {
    id: "multi",
    label: "MULTI-AGENT",
    tooltip: "Multi-Agent Systems",
    x: 340,
    y: 385,
    mobileX: 185,
    mobileY: 255,
    color: "#ec4899",
  },
  {
    id: "automation",
    label: "AUTOMATION",
    tooltip: "Workflow Automation",
    x: 165,
    y: 505,
    mobileX: 70,
    mobileY: 345,
    color: "#a855f7",
  },
  {
    id: "aiapis",
    label: "AI APIs",
    tooltip: "AI Model & Service APIs",
    x: 515,
    y: 505,
    mobileX: 300,
    mobileY: 345,
    color: "#f97316",
  },
  {
    id: "api",
    label: "API",
    tooltip: "External Integrations",
    x: 515,
    y: 585,
    mobileX: 300,
    mobileY: 410,
    color: "#22c55e",
  },
];

const centralNode = {
  label: "AI AGENT",
  x: 340,
  y: 235,
  mobileX: 185,
  mobileY: 150,
  color: "#00f2ff",
};

// Connections: each is { from, to } where "center" = AI AGENT
const connections = [
  { from: "llm", to: "center" },
  { from: "vector", to: "center" },
  { from: "rag", to: "center" },
  { from: "multi", to: "center" },
  { from: "automation", to: "multi" },
  { from: "aiapis", to: "multi" },
  { from: "api", to: "aiapis" },
];

const FloatingAIAgentNetwork = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const checkMotion = () =>
      setPrefersReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    checkMobile();
    checkMotion();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cx = isMobile ? centralNode.mobileX : centralNode.x;
  const cy = isMobile ? centralNode.mobileY : centralNode.y;

  const getNodePos = (node) => ({
    x: isMobile ? node.mobileX : node.x,
    y: isMobile ? node.mobileY : node.y,
  });

  const findNode = (id) => (id === "center" ? null : nodes.find((n) => n.id === id));

  const getConnEndpoints = (conn) => {
    const fromNode = findNode(conn.from);
    const toNode = conn.to === "center" ? null : findNode(conn.to);
    const fromPos = fromNode ? getNodePos(fromNode) : { x: cx, y: cy };
    const toPos = toNode ? getNodePos(toNode) : { x: cx, y: cy };
    return { fromPos, toPos };
  };

  const isConnHighlighted = (conn) =>
    hoveredNode === conn.from ||
    hoveredNode === conn.to ||
    hoveredNode === "center";

  return (
    <div className="relative w-full h-full flex items-center justify-center lg:justify-end lg:pr-8 xl:pr-16 2xl:pr-24">
      {/* Background radial glow — self-animating */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 65% 45%, rgba(0,242,255,0.12) 0%, rgba(0,242,255,0.03) 35%, transparent 70%)",
          animation: prefersReducedMotion ? "none" : "networkAmbientPulse 4s ease-in-out infinite",
        }}
      />

      <svg
        viewBox={isMobile ? "0 0 370 450" : "0 0 630 650"}
        className="w-full h-full max-w-[630px] max-h-[650px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="centerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        {connections.map((conn, i) => {
          const { fromPos, toPos } = getConnEndpoints(conn);
          const highlighted = isConnHighlighted(conn);

          return (
            <g key={`conn-${i}`}>
              {/* Outer soft glow line (guarantees visible glow without SVG bbox filter clipping) */}
              <line
                x1={fromPos.x}
                y1={fromPos.y}
                x2={toPos.x}
                y2={toPos.y}
                stroke={
                  highlighted
                    ? "rgba(0,242,255,0.45)"
                    : "rgba(0,242,255,0.1)"
                }
                strokeWidth={highlighted ? 4 : 2.5}
                strokeLinecap="round"
                style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
              />
              {/* Inner core line */}
              <line
                x1={fromPos.x}
                y1={fromPos.y}
                x2={toPos.x}
                y2={toPos.y}
                stroke={
                  highlighted
                    ? "rgba(0,242,255,0.95)"
                    : "rgba(0,242,255,0.35)"
                }
                strokeWidth={highlighted ? 1.8 : 1}
                strokeLinecap="round"
                style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
              />
              {/* Flowing data particle */}
              {!prefersReducedMotion && (
                <circle r="2.5" fill="rgba(0,242,255,0.95)" opacity="0.9">
                  <animateMotion
                    dur={`${2.2 + i * 0.3}s`}
                    repeatCount="indefinite"
                    path={`M${fromPos.x},${fromPos.y} L${toPos.x},${toPos.y}`}
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* Central AI AGENT node */}
        <g
          style={{ cursor: "pointer" }}
          onMouseEnter={() => setHoveredNode("center")}
          onMouseLeave={() => setHoveredNode(null)}
        >
          {/* Ambient self-glow behind center */}
          {!prefersReducedMotion && (
            <circle
              cx={cx}
              cy={cy}
              r={isMobile ? 45 : 60}
              fill="rgba(0,242,255,0.03)"
              stroke="none"
            >
              <animate
                attributeName="r"
                values={isMobile ? "45;55;45" : "60;78;60"}
                dur="4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                values="0.04;0.01;0.04"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
          )}

          {!prefersReducedMotion && (
            <circle
              cx={cx}
              cy={cy}
              r={isMobile ? 32 : 42}
              fill="none"
              stroke="rgba(0,242,255,0.12)"
              strokeWidth="0.8"
            >
              <animate
                attributeName="r"
                values={isMobile ? "32;44;32" : "42;58;42"}
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.25;0;0.25"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          )}

          <circle
            cx={cx}
            cy={cy}
            r={isMobile ? 25 : 32}
            fill="rgba(0,242,255,0.04)"
            stroke="rgba(0,242,255,0.25)"
            strokeWidth="0.8"
            filter="url(#centerGlow)"
            style={{
              transition: "all 0.3s",
              transform: hoveredNode === "center" ? "scale(1.08)" : "scale(1)",
              transformOrigin: `${cx}px ${cy}px`,
            }}
          />

          <circle
            cx={cx}
            cy={cy}
            r={isMobile ? 18 : 26}
            fill="rgba(0,15,20,0.9)"
            stroke="rgba(0,242,255,0.5)"
            strokeWidth="1.5"
            style={{
              transition: "all 0.3s",
              filter:
                hoveredNode === "center"
                  ? "drop-shadow(0 0 12px rgba(0,242,255,0.5))"
                  : "none",
            }}
          />

          <text
            x={cx}
            y={cy + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="rgba(0,242,255,0.9)"
            fontSize={isMobile ? "7.5" : "10"}
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="0.1em"
          >
            AI AGENT
          </text>

          {hoveredNode === "center" && (
            <text
              x={cx}
              y={cy + (isMobile ? 32 : 42)}
              textAnchor="middle"
              fill="rgba(0,242,255,0.45)"
              fontSize="7.5"
              fontFamily="monospace"
            >
              Central Orchestrator
            </text>
          )}
        </g>

        {/* Satellite nodes */}
        {nodes.map((node) => {
          const pos = getNodePos(node);
          const isHighlighted = hoveredNode === node.id;
          // Slightly smaller radius for nodes connected to multi-agent or api (lower tier)
          const isLowerTier = ["automation", "aiapis", "api"].includes(node.id);
          const outerR = isMobile ? (isLowerTier ? 20 : 23) : isLowerTier ? 26 : 32;
          const innerR = isMobile ? (isLowerTier ? 13 : 15) : isLowerTier ? 17 : 21;
          const fontSize = isMobile ? (isLowerTier ? 5.5 : 6) : isLowerTier ? 7.5 : 8.5;

          return (
            <g
              key={node.id}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Subtle float */}
              {!prefersReducedMotion && (
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={`0,0; 0,${-2 - Math.random() * 2}; 0,0`}
                  dur={`${3.5 + Math.random() * 2}s`}
                  repeatCount="indefinite"
                  begin={`${Math.random() * 2}s`}
                />
              )}

              {/* Glow background */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={outerR}
                fill={`${node.color}06`}
                stroke={`${node.color}${isHighlighted ? "55" : "18"}`}
                strokeWidth="0.7"
                filter="url(#nodeGlow)"
                style={{
                  transition: "all 0.3s",
                  transform: isHighlighted ? "scale(1.12)" : "scale(1)",
                  transformOrigin: `${pos.x}px ${pos.y}px`,
                }}
              />

              {/* Inner circle */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={innerR}
                fill="rgba(0,10,15,0.85)"
                stroke={`${node.color}${isHighlighted ? "80" : "35"}`}
                strokeWidth="0.8"
                style={{
                  transition: "all 0.3s",
                  filter: isHighlighted
                    ? `drop-shadow(0 0 8px ${node.color}50)`
                    : "none",
                }}
              />

              {/* Label */}
              <text
                x={pos.x}
                y={pos.y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={`${node.color}${isHighlighted ? "ff" : "bb"}`}
                fontSize={fontSize}
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="0.04em"
                style={{ transition: "fill 0.3s" }}
              >
                {node.label}
              </text>

              {/* Tooltip */}
              {isHighlighted && (
                <g>
                  <rect
                    x={pos.x - 65}
                    y={pos.y + outerR + 4}
                    width="130"
                    height="18"
                    rx="3"
                    fill="rgba(0,10,15,0.92)"
                    stroke={`${node.color}35`}
                    strokeWidth="0.5"
                  />
                  <text
                    x={pos.x}
                    y={pos.y + outerR + 16}
                    textAnchor="middle"
                    fill={`${node.color}99`}
                    fontSize="6.5"
                    fontFamily="monospace"
                  >
                    {node.tooltip}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default FloatingAIAgentNetwork;
