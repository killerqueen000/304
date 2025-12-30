import { RxHamburgerMenu } from "react-icons/rx";
import SidebarItem from "./SidebarItem";
import { useState, useEffect } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowSidebar(currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`sidebar-new ${showSidebar ? "visible" : "hidden"}`}>
        <button className="menu-btn" onClick={() => setIsOpen(true)}>
          <RxHamburgerMenu className="sidebar-icon" />
        </button>
      </div>

      <SidebarItem isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}


export default Sidebar;
