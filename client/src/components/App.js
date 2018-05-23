import React from "react";

import Header from "./Header";
import TimerSection from "./TimerSection";
import DataSection from "./DataSection";
import "./App.css";

export default () => {
  return (
    <div className="app">
      <Header />
      <TimerSection />
      <DataSection />
    </div>
  );
};
