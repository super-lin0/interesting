import React from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

import Drag from "./drag-source";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <DndProvider backend={Backend}>
          <Drag />
        </DndProvider>
      </div>
    </div>
  );
}

export default App;
