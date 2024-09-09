import React from "react";

const FileExplorer = ({ folderData }) => {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div className="container">
      <h5 onClick={setShowChildre(!showChildren)}>
        {folderData.type === "folder" ? "📁" : "📄"}
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
