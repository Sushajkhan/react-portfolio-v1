import React from "react";


import Card from "../Card/Card";

import "./skills.css";

const Skills = () => {
	return (
		<div className="skills">
			<Card
			
				title="Tools & Technologies "
				body={
					<div className="skills-body">
						<div className="skill">
                        <div className="container"><img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
								alt="html"
								className="skill-image"
							/>	</div>
							 <div className="container"><img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
								alt="css"
								className="skill-image"
							/>	</div>
							
                            <div className="container"><img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
								alt="js"
								className="skill-image"
							/> 	</div>
                             <div className="container"><img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
								alt="bootstrap"
								className="skill-image"
							/> 	</div>
                             <div className="container"><img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
								alt="tailwind"
								className="skill-image"
							/> 	</div> <div className="container"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                            alt="sass"
                            className="skill-image"
                        /> 	</div> <div className="container"><img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                        alt="react"
                        className="skill-image"
                    /> 	</div> <div className="container"><img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" 
                    alt="node"
                    className="skill-image"
                /> 	</div> <div className="container"><img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="express"
                className="skill-image"
            /> 	</div> 
                            
                
                       <div className="container"><img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
								alt="mongodb"
								className="skill-image"
							/> 	</div> <div className="container"><img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" 
                            alt="redux"
                            className="skill-image"
                        /> 	</div> 
                        <div className="container"><img
                            src=
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                            alt="firebase"
                            className="skill-image"
                        /> 	</div> 

<div className="container"><img
                            src=
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                            alt="git"
                            className="skill-image"
                        /> 	</div> <div className="container"><img
                        src=
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                        alt="github"
                        className="skill-image"
                    /> 	</div> 
                           
                           <div className="container"><img
                        src=
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" 
                        alt="materialui"
                        className="skill-image"
                    /> 	</div> 
                           <div className="container"><img
                        src=
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                        alt="npm"
                        className="skill-image"
                    /> 	</div> 
                           <div className="container"><img
                        src=
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
                        alt="vscode"
                        className="skill-image"
                    /> 	</div> 
                           
                           <div className="container"><img
                        src=
                        "https://cdn.worldvectorlogo.com/logos/jwt-3.svg"
                        alt="jwt"
                        className="skill-image"
                    /> 	</div> 
                            
                   </div>

					 </div>
				}
			/>
		</div>
	);
};

export default Skills;
