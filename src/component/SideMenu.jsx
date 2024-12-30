const SideMenu = () => {
    const menuItems = [
        { icon: '🏠', label: 'Home', isActive: false },
        { icon: '📋', label: 'Projects', isActive: true },
        { icon: '📝', label: 'Tasks', isActive: false },
        { icon: '🌐', label: 'Network', isActive: false },
        { icon: '📊', label: 'Analytics', isActive: false },
        { icon: '⚙️', label: 'Settings', isActive: false },
      ];
  return (
    <aside className={`sidebar ${isSidebarOpen ? "sidebar--open" : ""}`}>
      <div className="sidebar__logo">
        <span className="sidebar__logo-text">T</span>
      </div>
      <nav className="sidebar__nav">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`sidebar__item ${
              item.isActive ? "sidebar__item--active" : ""
            }`}
          >
            <span className="sidebar__item-icon">{item.icon}</span>
            {/* {isSidebarOpen && (
              <span className="sidebar__item-label">{item.label}</span>
            )} */}
          </a>
        ))}
      </nav>
    </aside>
  );
};
export default SideMenu;
