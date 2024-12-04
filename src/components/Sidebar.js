import React  from 'react';
import Image from "next/image";
import Link from "next/link";
import { sidebardConfig } from "assets/config/sidebarConfig";

export default function Sidebar() {
  const toggleSideMenu = () => {
    const sideMenu = document.querySelector("aside");
    sideMenu.style.display = 'none';
  };
  return (
    <aside>
      <div className="top">
        <div className="logo">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          <h2 className="text-muted">
            EGA<span className="danger">TOR</span>
          </h2>
        </div>
        <div className="close" id="close-btn" onClick={toggleSideMenu}>
          <span className="material-icons">close</span>
        </div>

      </div>
      <div className="sidebar">
        {sidebardConfig.map((item, index) => (
          <Link 
            key={index} 
            href={item.link} 
            className={`sidebar-link ${item.active ? "active" : ""}`}
          >
            <span className="material-icons">{item.icon}</span>
            <h3>{item.text}</h3>
            {item.count && <span className="message-count">{item.count}</span>}
          </Link>
        ))}
      </div>
    </aside>
  );
}

// import Image from "next/image";
// import { sidebardConfig } from "assets/config/sidebarConfig";

// export default function Sidebar({ onItemClick, activeView }) {
//   const handleItemClick = (item) => {
//     onItemClick(item.text.toLowerCase());
//   };

//   return (
//     <aside>
//       <div className="top">
//         <div className="logo">
//           <Image src="/images/logo.png" alt="logo" width={50} height={50} />
//           <h2 className="text-muted">
//             EGA<span className="danger">TOR</span>
//           </h2>
//         </div>
//         <div className="close" id="close-btn">
//           <span className="material-icons">close</span>
//         </div>
//       </div>
//       <div className="sidebar">
//         {sidebardConfig.map((item, index) => (
//           <a 
//             key={index} 
//             href="#" 
//             className={activeView === item.text.toLowerCase() ? "active" : ""}
//             onClick={() => handleItemClick(item)}
//           >
//             <span className="material-icons">{item.icon}</span>
//             <h3>{item.text}</h3>
//             {item.count && <span className="message-count">{item.count}</span>}
//           </a>
//         ))}
//       </div>
//     </aside>
//   );
// }


