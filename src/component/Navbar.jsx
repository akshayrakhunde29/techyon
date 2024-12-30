import plus from "../images/plus.png";
import home from "../images/home.png";
import file from "../images/file.png";
import group from "../images/group.png";
import arrows from "../images/arrows.png";
import searchStatus from "../images/search-status.png";
import icon from "../images/Icons.png";
import document from "../images/document-text.png";
import people from "../images/people.png";
import grid from "../images/grid_view.png";
import help from "../images/help.png";
import feedback from "../images/Feedback.png";

const Navbar = ({ isSidebarOpen }) => {
  const menuItems = [
    { icon: plus, label: "Home", isActive: false },
    { icon: home, label: "Projects", isActive: true },
    { icon: file, label: "Tasks", isActive: false },
    { icon: group, label: "Network", isActive: false },
    { icon: arrows, label: "Analytics", isActive: false },
    { icon: searchStatus, label: "searchStatus", isActive: false },
    { icon: icon, label: "icon", isActive: false },
    { icon: document, label: "document", isActive: false },
    { icon: people, label: "people", isActive: false },
    { icon: grid, label: "grid", isActive: false },
    { icon: help, label: "help", isActive: false },
    { icon: feedback, label: "feedback", isActive: false },
  ];
  return (
    <>
      <aside className={`sidebar ${isSidebarOpen ? "sidebar--open" : ""}`}>
        <nav className="sidebar__nav">
          {menuItems.map((item, index) => (
            <a
              key={item.id}
              href="#"
              className={`sidebar__item ${
                item.isActive ? "sidebar__item--active" : ""
              }`}
            >
              <span
                className={`sidebar__item-icon ${
                  index == 0 && index == 2 ? "imges" : ""
                }`}
              >
                <img src={item.icon} alt="" />
              </span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};
export default Navbar;
