import { useState } from "react";
export const ModButton = ({ mod, handleRemoveMod }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      key={mod.mod}
      onClick={() => {
        handleRemoveMod(mod.mod);
      }}
      className={`grid grid-cols-5 h-12 cursor-pointer text-xs overflow-auto break-all items-center justify-center`}
      style={{
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        borderCollapse: "collapse",
      }}
    >
      <div className="col-span-3 border-r border-grey p-2">{mod.mod}</div>
      <div className="border-r border-grey p-2">{mod.min}</div>
      <div className="p-2">{mod.max}</div>
    </div>
  );
};
