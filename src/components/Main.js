import React from "react";
import Head from "next/head";
import Insights from "assets/components/Insights";
import RecentOrders from "assets/components/RecentOrders";
import RightSection from "assets/components/RightSection";
import Sidebar from "assets/components/Sidebar";

export default function Main() {
  return (
    <main>
      <h1>Dashboard</h1>
      <div className="date">
        <input type="date" />
      </div>
      <Insights />
      <RecentOrders />
    </main>
  );
}
