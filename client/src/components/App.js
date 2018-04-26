import React from "react";

import Header from "./Header";
import TimerSection from "./TimerSection";
import Tasks from "./Tasks";
import Calendar from "./Calendar";
import DataSection from "./DataSection";

export default () => {
  return (
    <div>
      <Header />
      <TimerSection />
      <DataSection />
    </div>
  );
};
