import { useCallback, useRef, useEffect, useState } from "react";
import "../App.css";
import ForceGraph3d from "react-force-graph-3d";
import * as THREE from "three";

const Explore = (props) => {
  const [genreFilter, setGenreFilter] = useState(""); //initialized the state variable with an empty string
  const [state, setState] = useState(null);
  const fgRef = useRef();

  let filteredData = {};

  useEffect(() => {
    setState(props)
    fgRef.current.cameraPosition({
      x: fgRef.current.cameraPosition.x,
      y: fgRef.current.cameraPosition.y,
      z: 200,
    }); // Setting the camera postion to be closer on visit
  });

  const imgs = [
    { url: "https://i.imgur.com/j29TtQR.jpeg", genre: "rock" },
    { url: "https://i.imgur.com/wW9VT98.jpeg", genre: "rap" },
    { url: "https://i.imgur.com/rS8r0Dd.jpeg", genre: "jazz" },
    { url: "https://i.imgur.com/8WcKpNa.jpeg", genre: "classical" },
    { url: "https://i.imgur.com/JuCZNX9.jpeg", genre: "rap" },
    { url: "https://i.imgur.com/nWC6qhM.jpeg", genre: "rock" },
    { url: "https://i.imgur.com/U5Wc25I.jpeg", genre: "pop" },
    { url: "https://i.imgur.com/CJUTJcQ.jpeg", genre: "rap" },
    { url: "https://i.imgur.com/FffIWPZ.png", genre: "classical" },
    { url: "https://i.imgur.com/amN5egn.jpeg", genre: "rap" },
    { url: "https://i.imgur.com/cIc9m6t.jpeg", genre: "rock" },
    { url: "https://i.imgur.com/IAx214A.jpeg", genre: "pop" },
    { url: "https://i.imgur.com/7N1ryGR.jpeg", genre: "jazz" },
  ]; // List of images for nodes with genres to simulate filter

  function createNodes(imgs) {
    return imgs.map((img, id) => ({ id, img, genre: img.genre }));
  }

  function createLinks(imgs) {
    return [...Array(imgs.length).keys()]
      .filter((id) => id)
      .map((id) => {
        let target = Math.round(Math.random() * (id - 1));
        return { source: id, target };
      });
  }

  //random data for graph - replace with real data/database later on
  const gData = {
    nodes: createNodes(imgs),
    links: createLinks(imgs),
  };

  const handleClick = useCallback((node) => {
    // Aim at node from outside it
    const distance = 100;
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
    fgRef.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt ({ x, y, z })
      1000 // ms transition duration
    );
  });

  const handleBackgroundClick = useCallback(() => {
    fgRef.current.cameraPosition(
      {
        x: fgRef.current.cameraPosition.x,
        y: fgRef.current.cameraPosition.y,
        z: 200,
      },
      0,
      800
    );
    //fgRef.current.zoomToFit(800, 5);
  });

  const handleFilterChange = (event) => {
    setGenreFilter(event.target.value);
  };

  //flawed - can sometimes produce nodes with no links
  //Depending on filter given in UI, gData filters and so does graph
  if (genreFilter) {
    let _id = [
      ...new Set(
        gData.nodes
          .filter((node) => node.genre === genreFilter)
          .map((node) => node.id)
      ),
    ];
    let filteredLinks = [];
    let lastLink = { source: null, target: null };
    for (let i = 0; i < _id.length - 1; i++) {
      let target = _id[Math.floor(Math.random() * (_id.length - 1))];
      //making sure node doesn't link to itself
      while (target === _id[i]) {
        target = _id[Math.floor(Math.random() * (_id.length - 1))];
      }
      filteredLinks.push({ source: _id[i], target });
    }
    //ensures the last node is linked
    lastLink.source = _id[_id.length - 1];
    lastLink.target = filteredLinks[filteredLinks.length - 1].source;
    filteredLinks.push(lastLink);
    filteredData = {
      nodes: gData.nodes.filter((node) => node.genre === genreFilter),
      links: filteredLinks,
    };
  } else {
    //sets gData to whats hardcoded when filter is on All
    filteredData = gData;
  }


  return (
    <div className="main">
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
        <option value="jazz">Jazz</option>
        <option value="classical">Classical</option>
        <option value="rap">Rap</option>
      </select>
      <ForceGraph3d
        ref={fgRef}
        showNavInfo={false}
        nodeRelSize="7"
        nodeResolution="8"
        backgroundColor={"rgba(0,0,0,0)"}
        nodeColor={() => "white"}
        linkColor={() => "white"}
        graphData={filteredData}
        onNodeClick={handleClick}
        onBackgroundClick={handleBackgroundClick}
        margin-left="200px"
        nodeThreeObject={({ id }) => {
          const randomIndex = id % imgs.length;
          const imgTexture = new THREE.TextureLoader().load(
            imgs[randomIndex].url
          );
          const material = new THREE.SpriteMaterial({ map: imgTexture });
          const sprite = new THREE.Sprite(material);
          sprite.scale.set(12, 12);
          sprite.element = document.createElement('div');
          sprite.element.classList.add("node-image");
          return sprite;
        }}
      />
    </div>
  );
};

export default Explore;
