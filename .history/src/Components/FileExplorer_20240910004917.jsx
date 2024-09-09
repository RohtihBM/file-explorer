import React from "react";

const FileExplorer = ({ folderData }) => {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div className="container">
      <h5>
        {folderData.type === "folder" ? "📁" : "📄"}
        <span>{folderData.name}</span>
      </h5>
      {ShowChildren &&
        folderData?.children?.map((child, index) => {
          return <FileExplorer key={index} folderData={child} />;
        })}
    </div>
  );
};

export default FileExplorer;
