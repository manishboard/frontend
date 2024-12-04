// 'use client'
// import React, { useState } from 'react';
// import Sidebar from 'assets/components/Sidebar'
// import Insights from 'assets/components/Insights'
// import RecentOrders from 'assets/components/RecentOrders'
// import RightSection from 'assets/components/RightSection'

// export default function Dashboard() {
//   const [activeView, setActiveView] = useState('dashboard');

//   const handleSidebarItemClick = (view) => {
//     setActiveView(view);
//   };

//   return (
//     <div className="container">
//       <Sidebar onItemClick={handleSidebarItemClick} activeView={activeView} />
//       <main>
//         {activeView === 'dashboard' && (
//           <>
//             <h1>Dashboard</h1>
//             <div className="date">
//               <input type="date" />
//             </div>
//             <Insights />
//             <RecentOrders />
//           </>
//         )}
//         {activeView === 'messages' && (
//           <RightSection RecentOrders={true} />
//         )}
//       </main>
//       {activeView === 'dashboard' && <RightSection />}
//     </div>
//   )
// }

import Sidebar from 'assets/components/Sidebar'
import Insights from 'assets/components/Insights'
import RecentOrders from 'assets/components/RecentOrders'
import RightSection from 'assets/components/RightSection'
import "assets/styles/style.css"

export default function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <h1>Dashboard</h1>
        <div className="date">
          <input type="date" />
        </div>
        <Insights />
        <RecentOrders />
      </main>
      <RightSection />
    </div>
  )
}