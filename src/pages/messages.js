import React from "react";
import Sidebar from "assets/components/Sidebar";
import Mails from "assets/components/Mails";
import RightSection from "assets/components/RightSection";

export default function messages() {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <Mails />
      </main>
      <RightSection />
    </div>
  );
}
