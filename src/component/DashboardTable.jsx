import React from "react";
import ProjectHeader, { ProjectFilter } from "./ProjectHeader";

const DashboardTable = () => {
  const projects = Array(10)
    .fill()
    .map(() => ({
      id: Math.random().toString(36).substr(2, 9),
      name: "Techyon Software",
      progress: 50,
      owner: "Techyon",
      tasks: { completed: 10, total: 20 },
      status: "In Progress",
      startDate: "20/10/2024",
      endDate: "29/10/2025",
    }));

  const tasksData = Array(10)
    .fill()
    .map(() => ({
      id: "T1",
      name: "Task Number 1",
      team: "Not Associated",
      owner: "Techyon",
      status: "In Review",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      expStartDate: "00-00-2024",
      expEndDate: "00-00-2024",
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
    return `status ${statusMap[status] || ""}`;
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
              <th>Project Name</th>
              <th>%</th>
              <th>Owner</th>
              <th>Tasks</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project.id}>
                <td>{index + 1}</td>
                <td>{project.name}</td>
                <td>{project.progress}%</td>
                <td>
                  <div className="user">
                    <div className="user__avatar"></div>
                    <span>{project.owner}</span>
                  </div>
                </td>
                <td>
                  <div className="progress">
                    <div
                      className="progress__bar"
                      style={{ width: "50%" }}
                    ></div>
                    <span className="progress__text">
                      {project.tasks.completed}/{project.tasks.total}
                    </span>
                  </div>
                </td>
                <td>
                  <span className={getStatusClass(project.status)}>
                    {project.status}
                  </span>
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
              <th>Tasks Name</th>
              <th>Associated Team</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Exp. Start Date</th>
              <th>Exp. End Date</th>
            </tr>
          </thead>
          <tbody>
            {tasksData.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.team}</td>
                <td>
                  <div className="user">
                    <div className="user__avatar"></div>
                    <span>{task.owner}</span>
                  </div>
                </td>
                <td>
                  <span className={getStatusClass(task.status)}>
                    {task.status}
                  </span>
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
