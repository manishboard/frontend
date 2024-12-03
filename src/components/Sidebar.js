import Image from "next/image";
import { sidebardConfig } from "assets/config/sidebarConfig";

export default function Sidebar() {
  return (
    <aside>
      <div className="top">
        <div className="logo">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          <h2 className="text-muted">
            EGA<span className="danger">TOR</span>
          </h2>
        </div>
        <div className="close" id="close-btn">
          <span className="material-icons">close</span>
        </div>
      </div>

      <div className="sidebar">
        {sidebardConfig.map((item, index) => (
          <a key={index} href="#" className={item.active ? "active" : ""}>
            <span className="material-icons">{item.icon}</span>
            <h3>{item.text}</h3>
            {item.count && <span className="message-count">{item.count}</span>}
          </a>
        ))}
      </div>
    </aside>
  );
}
