import React from "react";

const FileExplorer = ({ folderData }) => {
  return (
    <div className="container">
      <h5>
        {folderData.type === "folder" ? "📁" : "📄"}
        <span>{folderData.name}</span>
      </h5>
    </div>
  );
};

export default FileExplorer;
