import React from "react";
import SourceBox from "./SourceBox";
import TargetBox from "./TargetBox";
import Type from "./FormItemType.js";

export default function Container() {
  return (
    <>
      <div style={{ overflow: "hidden", clear: "both", margin: "-.5rem" }}>
        <div style={{ float: "left" }}>
          <SourceBox type={Type.INPUT}>
            <small>输入框</small>
          </SourceBox>
          <SourceBox type={Type.SELECT}>
            <small>下拉框</small>
          </SourceBox>
          <SourceBox type={Type.RADIO}>
            <small>radio</small>
          </SourceBox>
          <SourceBox type={Type.BUTTON}>
            <small>按钮</small>
          </SourceBox>
        </div>

        <div style={{ float: "left", marginLeft: "5rem", marginTop: ".5rem" }}>
          <TargetBox />
        </div>
      </div>
    </>
  );
}
