import arrow from "../images/icon.png";
import switchbtn from "../images/switch.png";
import button from "../images/_Button_.png";
import fram1 from "../images/frame1.png";
import frame from "../images/frame.png";

const ProjectHeader = () => {
  return (
    <>
      <div className="section__header">
        <div className="project-content">
          <h2>Projects</h2>
          <button className="button button--primary">+ Projects</button>
        </div>
        <div className="dashboard-head">
          <span>Dashboard</span> / <span>Project Overview</span>
        </div>
      </div>
    </>
  );
};
export default ProjectHeader;

export const ProjectFilter = ({ title, filter }) => {
  return (
    <>
      <div className="section__header project-container">
        <div className="project-content">
          <h2>
            {title} <img src={arrow} alt="" />
          </h2>
        </div>
        <div className="dashboard-head">
          <img src={switchbtn} alt="" />
          <img src={button} alt="" />
          {filter && <img src={fram1} alt="" />}
          <img src={frame} alt="" />
        </div>
      </div>
    </>
  );
};
