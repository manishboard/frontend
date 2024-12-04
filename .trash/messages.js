import Sidebar from 'assets/components/Sidebar'
import Insights from 'assets/components/Insights'
import RecentOrders from 'assets/components/RecentOrders'
import RightSection from 'assets/components/RightSection'

export default function Messages() {
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

// import Sidebar from 'assets/components/Sidebar';
// import { updateConfig } from "assets/config/rightSectionConfig";
// import Image from "next/image";
// import 'assets/styles/messages.css'

// export default function Messages() {
//   return (
//     <div className="container">
//       <Sidebar />
//       <main className="messages-page">
//         <h1>Messages</h1>
//         <div className="recent-updates full-page">
//           <h2>Recent Updates</h2>
//           <div className="updates">
//             {updateConfig.map((update, index) => (
//               <div key={index} className="update">
//                 <div className="profile-photo">
//                   <Image
//                     src={`/images/${update.image}`}
//                     alt={update.name}
//                     width={40}
//                     height={40}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <div className="message">
//                   <p>
//                     <b>{update.name}</b> {update.message}
//                   </p>
//                   <small className="text-muted">{update.time}</small>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
