import React from "react";

const FileExplorer = ({ folderData }) => {
  return (
    <div className="container">
      <h5>
        {folderData.type === "folder" ? "📁" : "📄"}
        <span>{folderData.name}</span>
      </h5>
      {folderData.children.map((child, index) => {
        return <FileExplorer key={index} folderData={child} />;
      })}
    </div>
  );
};

export default FileExplorer;
