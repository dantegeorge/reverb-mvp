import {useCallback, useRef, useEffect, useState} from "react";
import "../App.css";
import ForceGraph3d from "react-force-graph-3d";

const Explore = (props) => {
  const [state, setState] = useState(null);
  const fgRef = useRef();  

  useEffect(() => {
    setState(props);//Graph only re-renders if state change occurs 
  })

  //random data for graph - replace with real data/database later on
  const N = 50;
  const gData = {
    nodes: [...Array(N).keys()].map((i) => ({ id: i })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        source: id,
        target: Math.round(Math.random() * (id - 1)),
        label: id,
      }))
  }; 
  console.log(gData);

  const handleClick = useCallback(
    (node) => {
      // Aim at node from outside it
      const distance = 200;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        1000 // ms transition duration
      )
    });

  const handleBackgroundClick = useCallback(() => {
    fgRef.current.cameraPosition({ x: fgRef.current.cameraPosition.x, y: fgRef.current.cameraPosition.y, z: 1000 }, 0, 800);
    //fgRef.current.zoomToFit(800, 5);
  });

  return (
    <div className="main">
      <ForceGraph3d
      ref={fgRef}
      showNavInfo={false}
      nodeRelSize="7"
      nodeResolution="10"
      backgroundColor={"rgba(0,0,0,0)"}
      nodeColor={() => "white"}
      linkColor={() => "white"}
      graphData={gData}
      onNodeClick={handleClick}
      onBackgroundClick={handleBackgroundClick}
      margin-left="200px"
      />
    </div>
  );
};

export default Explore;
