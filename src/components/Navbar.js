"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ThemeToggler from "./ThemeToggler";

export default function Navbar() {
  const [sideMenuVisible, setSideMenuVisible] = useState(true);
  const sideMenuRef = useRef(null);

  const toggleSideMenu = () => {
    setSideMenuVisible((prev) => !prev);
  };

  useEffect(() => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.display = sideMenuVisible ? "block" : "none";
    }
  }, [sideMenuVisible]);

  return (
    <nav className="navbar">
      <div className="user">
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
    </nav>
  );
}

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { sidebardConfig } from "assets/config/sidebarConfig";
// import ThemeToggler from "./ThemeToggler";

// export default function Navbar() {
//   const [sideMenue, setSideMenue] = useState("block");

//   const toggleSideMenue = () => {
//     setSideMenue( (display) => ( display === "none" ? "block" : "none" ));
//     if (sideMenue === "none"){
//       document.querySelector("aside").style.display = 'none';
//     } else {
//       document.querySelector("aside").style.display = 'block';
//     }
//   };
//   return (
//     <nav className="navbar">
//       <div className="top">
//         <div className="logo">
//           <Image src="/images/logo.png" alt="logo" width={50} height={50} />
//           <h2 className="text-muted">
//             EGA<span className="danger">TOR</span>
//           </h2>
//         </div>
//         <div className="close" id="close-btn" onClick={toggleSideMenue}>
//           <span className="material-icons">close</span>
//         </div>
//       </div>

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
//     </nav>
//   );
// }
