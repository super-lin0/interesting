import React, { useState, useCallback } from "react";
import { useDrop } from "react-dnd";
import Type from "./FormItemType";

const style = {
  border: "1px solid gray",
  height: "15rem",
  width: "15rem",
  padding: "2rem",
  textAlign: "center"
};

let childs = [];

const TargetBox = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: [Type.INPUT, Type.SELECT, Type.RADIO, Type.BUTTON],
    drop(item) {
      onDrop(item.type);
      return undefined;
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      draggingType: monitor.getItemType()
    })
  });

  const opacity = isOver ? 1 : 0.7;

  return (
    <div ref={drop} style={{ ...style, opacity }}>
      <p>Drop here.</p>
      {children.map((type, index) => (
        <div key={index}>{generatorFormItem[type]()}</div>
      ))}
    </div>
  );
};

const StatefulTargetBox = props => {
  const [children, setChildren] = useState(childs);
  const handleDrop = useCallback(type => {
    childs.push(type);
    setChildren(childs);
  }, []);

  return <TargetBox {...props} children={children} onDrop={handleDrop} />;
};

const generatorFormItem = {
  [Type.INPUT]: () => (
    <>
      <label>Name:</label>
      <input type="text" id="name" />
    </>
  ),
  [Type.SELECT]: () => (
    <>
      <label>性别:</label>
      <select id="simple" name="simple">
        <option>男</option>
        <option>女</option>
      </select>
    </>
  ),
  [Type.RADIO]: () => (
    <>
      <label>是否必填:</label>
      <label>是</label>
      <input type="radio" name="isRequired" value="y" />
      <label>否</label>
      <input type="radio" name="isRequired" value="n" />
    </>
  ),
  [Type.BUTTON]: () => (
    <button type="button">
      <strong>提交</strong>
    </button>
  )
};

export default StatefulTargetBox;
