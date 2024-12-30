import search from "../images/search.png";
import filter from "../images/filter.png";
import valum from "../images/valum.png";
import notification from "../images/notification.png";
import profile from "../images/profile.png";
import downArrow from "../images/downArrow.png";

const Header = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div className="dashboard__content header__content">
        <header className="header">
          <div className="header__left">
            <button
              className="header__menu"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <h1 className="header__title">TECHYON</h1>
          </div>
          <div className="header__right">
            <button className="header__action">
              <img src={search} alt="" />
            </button>
            <button className="header__action">
              <img src={filter} alt="" />
            </button>
            <button className="header__action">
              <img src={valum} alt="" />
            </button>
            <div className="header__action active">
              <img src={notification} alt="" />
              <span className="count">+99</span>
            </div>
            <div className="header__action profile">
              <img src={profile} alt="" />
            </div>
            <button className="header__action">
              <img src={downArrow} alt="" />
            </button>
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;
