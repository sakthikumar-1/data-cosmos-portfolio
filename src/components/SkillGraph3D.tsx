import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Line, Billboard } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";

interface SkillNode {
  name: string;
  position: [number, number, number];
  color: string;
  connections: number[];
  desc: string;
}

const nodes: SkillNode[] = [
  { name: "Data Analytics", position: [0, 0, 0], color: "#e67864", connections: [1, 2, 3, 4, 5], desc: "Core discipline" },
  { name: "Python", position: [-2.5, 1.5, 0.5], color: "#3776AB", connections: [5, 0], desc: "Pandas, NumPy, Scikit-Learn" },
  { name: "SQL", position: [2.5, 1.2, -0.5], color: "#f0a030", connections: [0], desc: "MySQL, Queries, Joins" },
  { name: "Power BI", position: [-1.8, -1.8, 0.8], color: "#F2C811", connections: [0, 4], desc: "DAX, Dashboards" },
  { name: "Tableau", position: [2, -1.5, -0.3], color: "#E97627", connections: [0, 3], desc: "Visualizations, Stories" },
  { name: "ML", position: [0, 2.5, -0.5], color: "#88B04B", connections: [1, 0], desc: "Classification, Flask" },
  { name: "Excel", position: [-3, -0.3, -0.5], color: "#217346", connections: [0, 3], desc: "Advanced, Macros, Pivots" },
  { name: "Pandas", position: [-1.5, 2.8, 1], color: "#150458", connections: [1], desc: "Data wrangling" },
  { name: "Scikit-Learn", position: [1.2, 3, 0], color: "#F89939", connections: [1, 5], desc: "Predictive modeling" },
  { name: "Flask", position: [1, 2, 1.5], color: "#000000", connections: [5], desc: "Model deployment" },
  { name: "NumPy", position: [-3.5, 2, 0], color: "#4DABCF", connections: [1], desc: "Numerical computing" },
];

const NodeSphere = ({ node, index, onHover }: { node: SkillNode; index: number; onHover: (i: number | null) => void }) => {
  const ref = useRef<THREE.Mesh>(null);
  const isCenter = index === 0;
  const baseSize = isCenter ? 0.45 : 0.25;

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.position.y = node.position[1] + Math.sin(t * 0.5 + index) * 0.15;
    }
  });

  return (
    <group>
      <mesh
        ref={ref}
        position={node.position}
        onPointerEnter={() => onHover(index)}
        onPointerLeave={() => onHover(null)}
      >
        <sphereGeometry args={[baseSize, 32, 32]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={isCenter ? 0.6 : 0.3}
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>
      <Billboard position={[node.position[0], node.position[1] - (isCenter ? 0.7 : 0.5), node.position[2]]}>
        <Text fontSize={isCenter ? 0.22 : 0.16} color="white" anchorX="center" anchorY="middle">
          {node.name}
        </Text>
      </Billboard>
    </group>
  );
};

const ConnectionLines = ({ hovered }: { hovered: number | null }) => {
  const lines = useMemo(() => {
    const result: { start: [number, number, number]; end: [number, number, number]; active: boolean }[] = [];
    nodes.forEach((node, i) => {
      node.connections.forEach((j) => {
        if (j > i) {
          result.push({
            start: node.position,
            end: nodes[j].position,
            active: hovered === i || hovered === j,
          });
        }
      });
    });
    return result;
  }, [hovered]);

  return (
    <>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={[line.start, line.end]}
          color={line.active ? "#e67864" : "#ffffff"}
          opacity={line.active ? 0.8 : 0.15}
          transparent
          lineWidth={line.active ? 2 : 1}
        />
      ))}
    </>
  );
};

const RotatingGroup = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.3;
    }
  });
  return <group ref={ref}>{children}</group>;
};

const SkillGraph3D = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative h-[450px] w-full rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#e67864" />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#88B04B" />
        <RotatingGroup>
          <ConnectionLines hovered={hovered} />
          {nodes.map((node, i) => (
            <NodeSphere key={node.name} node={node} index={i} onHover={setHovered} />
          ))}
        </RotatingGroup>
      </Canvas>
      {hovered !== null && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 text-center pointer-events-none">
          <p className="text-sm font-semibold text-foreground">{nodes[hovered].name}</p>
          <p className="text-xs text-muted-foreground">{nodes[hovered].desc}</p>
        </div>
      )}
    </div>
  );
};

export default SkillGraph3D;
