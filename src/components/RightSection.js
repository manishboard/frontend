import React from "react";
import Image from "next/image";
import ThemeToggler from "./ThemeToggler";
import { updateConfig, salesConfig } from "assets/config/rightSectionConfig";

export default function RightSection() {
  const toggleSideMenu = () => {
    const sideMenu = document.querySelector("aside");
    sideMenu.style.display = "block";
  };

  return (
    <div className="right">
      <div className="top">
        <button id="menu-btn" onClick={toggleSideMenu}>
          <span className="material-icons">menu</span>
        </button>
        <ThemeToggler />
        <div className="profile">
          <div className="info">
            <p>
              Hey, <b>Daniel</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <Image
              src="/images/profile-1.jpg"
              alt="Admin"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      <div className="recent-updates">
        <h2>Recent Meetings</h2>
        <div className="updates">
          {updateConfig.map((update, index) => (
            <div key={index} className="update">
              <div className="profile-photo">
                <Image
                  src={`/images/${update.image}`}
                  alt={update.name}
                  width={40}
                  height={40}
                />
              </div>
              <div className="message">
                <p>
                  <b>{update.name}</b> {update.message}
                </p>
                <small className="text-muted">{update.time}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sales-analytics">
        <h2>Month Wise Aws Cost</h2>
        {salesConfig.map((item, index) => (
          <div key={index} className={`item ${item.class}`}>
            <div className="icon">
              <span className="material-icons">{item.icon}</span>
            </div>
            <div className="right">
              <div className="info">
                <h3>{item.title}</h3>
                <small className="text-muted">{item.time}</small>
              </div>
              <h5 className={item.type}>{item.change}</h5>
              <h3>{item.value}</h3>
            </div>
          </div>
        ))}
        <div className="item add-product">
          <div>
            <span className="material-icons">add</span>
            <h3>Add Product</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
// import Image from "next/image";
// import ThemeToggler from "./ThemeToggler";
// import { updateConfig, salesConfig } from "assets/config/rightSectionConfig";

// export default function RightSection() {
//   return (
//     <div className="right">
//       <div className="top">
//         <button id="menu-btn">
//           <span className="material-icons">menu</span>
//         </button>
//         <ThemeToggler />
//         <div className="profile">
//           <div className="info">
//             <p>
//               Hey, <b>Daniel</b>
//             </p>
//             <small className="text-muted">Admin</small>
//           </div>
//           <div className="profile-photo">
//             <Image
//               src="/images/profile-1.jpg"
//               alt="Admin"
//               width={40}
//               height={40}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="recent-updates">
//         <h2>Recent Updates</h2>
//         <div className="updates">
//           {updateConfig.map((update, index) => (
//             <div key={index} className="update">
//               <div className="profile-photo">
//                 <Image
//                   src={`/images/${update.image}`}
//                   alt={update.name}
//                   width={40}
//                   height={40}
//                 />
//               </div>
//               <div className="message">
//                 <p>
//                   <b>{update.name}</b> {update.message}
//                 </p>
//                 <small className="text-muted">{update.time}</small>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="sales-analytics">
//         <h2>Sales Analytics</h2>
//         {salesConfig.map((item, index) => (
//           <div key={index} className={`item ${item.class}`}>
//             <div className="icon">
//               <span className="material-icons">{item.icon}</span>
//             </div>
//             <div className="right">
//               <div className="info">
//                 <h3>{item.title}</h3>
//                 <small className="text-muted">{item.time}</small>
//               </div>
//               <h5 className={item.type}>{item.change}</h5>
//               <h3>{item.value}</h3>
//             </div>
//           </div>
//         ))}
//         <div className="item add-product">
//           <div>
//             <span className="material-icons">add</span>
//             <h3>Add Product</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";
// import ThemeToggler from "./ThemeToggler";
// import { updateConfig, salesConfig } from "assets/config/rightSectionConfig";

// export default function RightSection() {
//   return (
//     <div className="right">

//       <div className="recent-updates">
//         <h2>Recent Updates</h2>
//         <div className="updates">
//           {updateConfig.map((update, index) => (
//             <div key={index} className="update">
//               <div className="profile-photo">
//                 <Image
//                   src={`/images/${update.image}`}
//                   alt={update.name}
//                   width={40}
//                   height={40}
//                 />
//               </div>
//               <div className="message">
//                 <p>
//                   <b>{update.name}</b> {update.message}
//                 </p>
//                 <small className="text-muted">{update.time}</small>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="sales-analytics">
//         <h2>Sales Analytics</h2>
//         {salesConfig.map((item, index) => (
//           <div key={index} className={`item ${item.class}`}>
//             <div className="icon">
//               <span className="material-icons">{item.icon}</span>
//             </div>
//             <div className="right">
//               <div className="info">
//                 <h3>{item.title}</h3>
//                 <small className="text-muted">{item.time}</small>
//               </div>
//               <h5 className={item.type}>{item.change}</h5>
//               <h3>{item.value}</h3>
//             </div>
//           </div>
//         ))}

//         <div className="item add-product">
//           <div>
//             <span className="material-icons">add</span>
//             <h3>Add Product</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
