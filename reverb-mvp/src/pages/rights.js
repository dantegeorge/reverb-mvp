import React from "react";
import "../App.css";

const Rights = () => {
  return (
    <div className="main">
      <h1 id="rightsTitle">Reverb Rights</h1>
      <p>Music Rights Upload</p>
      <div className="container-rights">
        <div className="container-rights-input">
          <h3>Musical Work:</h3>
          <div>Title:</div>
          <input className="rights-input" type="text"/>
          <div>Alternative Title:</div>
          <input className="rights-input" type="text"/>
          <div>Title Sound Recording:</div>
          <input className="rights-input" type="text"/>
          <div>Alternative Title Sound Recording:</div>
          <input className="rights-input" type="text"/>
          <div>ISWC</div>
          <input className="rights-input" type="text" placeholder="US-TEY-09-00057"/>
          <div>Creator(s), ISNI & Split:</div>
          <input className="rights-input2" type="text" placeholder="Full Name"/>
          <input className="rights-input2" type="text" placeholder="ISNI"/>
          <input className="rights-input2" type="text" placeholder="Percentage"/>
          <div>Publisher(s):</div>
          <input className="rights-input2" type="text" placeholder="Full Name"/>
          <input className="rights-input2" type="text" placeholder="Percentage"/>
          <div>Territory</div>
          <input className="rights-input" type="text" placeholder="World Wide"/>
        </div>
        <div className="container-rights-input">
          <h3>Sound Recording:</h3>
          <div>Title:</div>
          <input className="rights-input" type="text"/>
          <div>Version Title:</div>
          <input className="rights-input" type="text"/>
          <div>Alternative Title:</div>
          <input className="rights-input" type="text"/>
          <div>ISRC:</div>
          <input className="rights-input" type="text"/>
          <div>Edited:</div>
          <input className="rights-input" type="text" placeholder="US-TEY-09-00057"/>
          <div>Album:</div>
          <input className="rights-input" type="text"/>
          <div>Label(s):</div>
          <input className="rights-input" type="text"/>
          <div>Primary Artist:</div>
          <input className="rights-input" type="text"/>
          <div>Additional Artist(s):</div>
          <input className="rights-input" type="text"/>
          <div>Released:</div>
          <input className="rights-input" type="text"/>
          <div>Duration:</div>
          <input className="rights-input" type="text"/>
          <div>Territory:</div>
          <input className="rights-input" type="text"/>
        </div>
      </div>
    </div>
  );
};

export default Rights;
