import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects to Present
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/static/images/hashtree.png"
          title="HashTree: Full Stack Hashnode Clone"
          description="HashTree is a free developer blogging platform that allows you to publish articles on your own domain and helps you stay connected with a global developer community  uilt with Next.js, Node, Express, Tailwind CSS, and Drizzle ORM."
        />
        <ProjectCard
          src="/static/images/dockx.png"
          title="Dock-X: A Kiosk Docker Dashboard"
          description="A dashboard for Docker that runs on low maintainance hosts and displays the status of your containers written in Python. It also allows you to start, stop, and restart containers."
        />
        <ProjectCard
          src="/static/images/zephyr.png"
          title="Zephyr API"
          description="A collection of REST APIs that simulate banking transactions in real world built with Go and PostgreSQL."
        />
      </div>
    </div>
  );
};

export default Projects;
