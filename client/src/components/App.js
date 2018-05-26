import React from "react";

import Header from "./Header";
import TimerSection from "./TimerSection";
import DataSection from "./DataSection";
import Footer from "./Footer";
import TimerCard from "./Temp/TimerCard";
import CalendarCard from "./Temp/CalendarCard";
import ListCard from "./Temp/ListCard";
import "./App.css";

export default () => {
  return (
    <div className="app">
      <Header />
      <TimerCard />
      <CalendarCard />
      <ListCard />
      {/* <TimerSection />
      <DataSection /> */}
      <Footer />
    </div>
  );
};
