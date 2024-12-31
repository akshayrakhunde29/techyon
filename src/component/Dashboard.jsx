import React from "react";
import DashboardTable from "./DashboardTable";
import ProjectHeader, { ProjectFilter } from "./ProjectHeader";
import file from "../images/TYicon.png";
import calender from "../images/calendar.png";
import man from "../images/man.png";
import document from "../images/document-text.png";

const Dashboard = () => {
  const categories = ["Not Started", "In Progress", "Attention", "Completed"];

  const projects = Array(12)
    .fill()
    .map(() => ({
      id: Math.random().toString(36).substr(2, 9),
      title: "Project Name",
      startDate: "01/01/2024",
      endDate: "31/01/2024",
      users: 4,
      files: 12,
      progress: Math.floor(Math.random() * 100),
    }));

  const Card = ({ item, type, status }) => (
    <div className="card">
      <div className="card__top">
        <h6 className="card__title">
          <img src={file} alt="" />
          {item.title}
        </h6>
        <h6 className="card__id">ID: P-11</h6>
      </div>

      <div className="progress_container">
        <div>07</div>
        <div className="card__progress">
          <div
            // className={`card__progress-bar card__progress-bar--${status
            //   .toLowerCase()
            //   .replace(" ", "-")}`}
            className={`card__progress-bar card__progress-bar--completed`}
            style={{ width: `${50}%` }}
          >
            50%
          </div>
        </div>
        <div>14</div>
      </div>

      <div className="card__dates">
        <img src={calender} alt="" /> <span>{item.startDate}</span> -{" "}
        <span>{item.endDate}</span>
      </div>

      <div className="card__footer">
        <div className="card__users">
          <div className="card__avatars">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="card__avatar">
                <img src={man} alt="" />
              </div>
            ))}
          </div>
          <span className="card__users-count">10+</span>
        </div>
        <div className="card__files">
          <img src={document} alt="" />
          <span>{item.files} Files</span>
        </div>
      </div>
    </div>
  );

  const CategoryColumn = ({ title, items, type }) => (
    <div className="category">
      <div
        className={`category__header ${
          title == "In Progress"
            ? "category__inprogress"
            : title == "Attention"
            ? "category__archived"
            : title == "Completed" && "category__completed"
        }`}
      >
        <span className="category__title">{title}</span>
        <span className="category__count">2</span>
      </div>
      <div className="category__content">
        {items.slice(0, 3).map((item) => (
          <Card key={item.id} item={item} type={type} status={title} />
        ))}
      </div>
      <button className="category__more">View more</button>
    </div>
  );

  return (
    <>
      <div className="dashboard__content">
        <main className="main">
          <ProjectHeader />
          <ProjectFilter title={"All Projects"}  filter={false} />
          <section className="section">
            <div className="section__grid">
              {categories.map((category) => (
                <CategoryColumn
                  key={category}
                  title={category}
                  items={projects}
                  type="project"
                />
              ))}
            </div>
          </section>

          <ProjectFilter title={"All Tasks"} filter={false} />
          <section className="section">
            <div className="section__grid">
              {categories.map((category) => (
                <CategoryColumn
                  key={category}
                  title={category}
                  items={projects}
                  type="task"
                />
              ))}
            </div>
          </section>
          <DashboardTable />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
