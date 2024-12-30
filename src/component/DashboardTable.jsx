import React from "react";
import ProjectHeader, { ProjectFilter } from "./ProjectHeader";
import TYicon from "../images/TYicon.png";
import owner from "../images/owner.png";
import tasks from "../images/task.png";
import status from "../images/status.png";
import calender from "../images/calendar.png";
import man from "../images/man.png";
import task from "../images/taskName.png";
import team from "../images/team.png";
import access from "../images/access.png";
import viewDetails from "../images/view.png";

const DashboardTable = () => {
  const projects = Array(10)
    .fill()
    .map((_, index) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: "Techyon Software",
      progress: 50,
      owner: "Techyon",
      tasks: { completed: 10, total: 20 },
      status:
        index == 1
          ? "In Progress"
          : index == 2
          ? "Completed"
          : index == 3
          ? "Archived"
          : "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
      accessProject: index === 1 ? true : false,
    }));

  const tasksData = Array(10)
    .fill()
    .map((_, index) => ({
      id: "T1",
      name: "Task Number 1",
      team: "Not Associated",
      owner: "Techyon",
      status:
        index == 1
          ? "On Track"
          : index == 2
          ? "Delayed"
          : index == 3
          ? "In Revision"
          : "In Review",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      expStartDate: "00-00-2024",
      expEndDate: "00-00-2024",
      viewDetails: index === 2 ? true : false,
    }));

  const getStatusClass = (status) => {
    const statusMap = {
      "Not Started": "status--not-started",
      "In Progress": "status--in-progress",
      Completed: "status--completed",
      Archived: "status--archived",
      "In Review": "status--review",
      "On Track": "status--on-track",
      Delayed: "status--delayed",
      "In Revision": "status--revision",
    };
    return `${statusMap[status] || ""}`;
  };

  return (
    <>
      <ProjectHeader />
      <ProjectFilter title={"All Projects"} filter={true} />
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>
                <img src={TYicon} alt="" />
                <span>Project Name</span>
              </th>
              <th>%</th>
              <th>
                <img src={owner} alt="" />
                <span>Owner</span>
              </th>
              <th>
                <img src={tasks} alt="" />
                <span>Tasks</span>
              </th>
              <th>
                <img src={status} alt="" />
                <span>Status</span>
              </th>
              <th>
                <img src={calender} alt="" />
                <span>Start Date</span>
              </th>
              <th>
                <img src={calender} alt="" />
                <span>End Date</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project.id}>
                <td>{index + 1}</td>
                <td>
                  {project.name}
                  {project.accessProject && (
                    <span className="access_project">
                      <img src={access} alt="" />
                      <span>Access Project</span>
                    </span>
                  )}
                </td>
                <td>{project.progress}%</td>
                <td>
                  <div className="user">
                    <div className="user__avatar">
                      <img src={man} alt="" />
                    </div>
                    <span>{project.owner}</span>
                  </div>
                </td>
                <td>
                  <div className="progress_container">
                    <div>10</div>
                    <div className="card__progress" style={{ width: "5rem" }}>
                      <div
                        className={`card__progress-bar card__progress-bar--completed`}
                        style={{ width: `${50}%` }}
                      >
                        50%
                      </div>
                    </div>
                    <div>20</div>
                  </div>
                </td>
                <td className={getStatusClass(project.status)}>
                  <span className="status">{project.status}</span>
                </td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ProjectFilter title={"All Tasks"} filter={true} />

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>
                <img src={task} alt="" />
                <span>Tasks Name</span>
              </th>
              <th>
                <img src={team} alt="" />
                <span>Associated Team</span>
              </th>
              <th>
                {" "}
                <img src={owner} alt="" />
                <span>Owner</span>
              </th>
              <th>
                {" "}
                <img src={status} alt="" />
                <span>Status</span>
              </th>
              <th>
                <img src={calender} alt="" />
                <span>Start Date</span>
              </th>
              <th>
                {" "}
                <img src={calender} alt="" />
                <span>End Date</span>
              </th>
              <th>
                {" "}
                <img src={calender} alt="" />
                <span>Exp. Start Date</span>
              </th>
              <th>
                {" "}
                <img src={calender} alt="" />
                <span>Exp. End Date</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tasksData.map((task) => (
              <tr key={task.id} className="task-body">
                <td>{task.id}</td>
                <td>
                  {task.name}
                  {task.viewDetails && (
                    <span className="access_project">
                      <img src={viewDetails} alt="" />
                      <span>View Details</span>
                    </span>
                  )}
                </td>
                <td>{task.team}</td>
                <td>
                  <div className="user">
                    <div className="user__avatar">
                      <img src={man} alt="" />
                    </div>
                    <span>{task.owner}</span>
                  </div>
                </td>
                <td className={getStatusClass(task.status)}>
                  <span className="status">{task.status}</span>
                </td>
                <td>{task.startDate}</td>
                <td>{task.endDate}</td>
                <td>{task.expStartDate}</td>
                <td>{task.expEndDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardTable;
