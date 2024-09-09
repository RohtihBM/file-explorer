import React from "react";

const FileExplorer = ({ folderData }) => {
  return (
    <div>
      <h5>
        {folderData.type}
        {folderData.name}
      </h5>
    </div>
  );
};

export default FileExplorer;
