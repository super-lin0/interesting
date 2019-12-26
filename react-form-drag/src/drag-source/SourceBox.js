import React, { useMemo } from "react";
import { useDrag } from "react-dnd";

const style = {
  border: "1px dashed gray",
  padding: "0.5rem",
  margin: "0.5rem"
};

const SourceBox = ({ type, children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: `${type}` },
    canDrag: true,
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const containerStyle = useMemo(
    () => ({
      ...style,
      // backgroundColor,
      opacity: isDragging ? 0.4 : 1,
      cursor: "default"
    }),
    [isDragging]
  );

  return (
    <div ref={drag} style={containerStyle}>
      {children}
    </div>
  );
};

export default SourceBox;
