import React from "react";
import { useState } from "react";
const FileExplorer = ({ folderData }) => {
  const [showChildren, setShowChildren] = useState(false);
  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <div className="container">
      <h5 onClick={handleClick}>
        {folderData.type === "folder" ? (!showChildren ? "📁" : "📂") : "📄"}
        <span>{folderData.name}</span>
      </h5>
      {showChildren &&
        folderData?.children?.map((child, index) => {
          return <FileExplorer key={index} folderData={child} />;
        })}
    </div>
  );
};

export default FileExplorer;
