import React, { useEffect } from "react";

import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import AllProjects from "../../components/AllProjects/AllProjects";

import INFO from "../../assets/data/user";


import "./projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	

	return (
		<>
		<br />
	
		
			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Things I’ve made trying to put my dent in the
							universe.
						</div>

						<div className="subtitle projects-subtitle">
							I've worked on a variety of projects 
							and I'm proud of the progress I've made. Many of
							these projects are open-source and available for
							others to explore and contribute to. If you're
							interested in any of the projects I've worked on,
							please feel free to check out the code and suggest
							any improvements or enhancements you might have in
							mind. Collaborating with others is a great way to
							learn and grow, and I'm always open to new ideas and
							feedback.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
