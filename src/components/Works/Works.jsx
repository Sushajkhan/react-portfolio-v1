import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../Card/Card";

import "./works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://play-lh.googleusercontent.com/Pivg31JOdgfNpKrHhy-Bg83qrvhMtW8dIq9xsnuIGcYZ_8Jq1LIFQUdCE-uYkSVWLw"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Entry</div>
							<div className="work-subtitle">
								Mern Stack Web Developer Intern
							</div>
							<div className="work-duration">Feb 2023 - Present</div>
						</div>
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/D4D03AQHBzlWU9kkJVQ/profile-displayphoto-shrink_800_800/0/1664190395078?e=2147483647&v=beta&t=2ruKQtlzH_luXmM21KGR87wULnxoxup3-1u8RNaUSQs"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Blastline Institute</div>
							<div className="work-subtitle">
								Co-ordinator
							</div>
							<div className="work-duration">Jan 2023 - Present</div>
						</div>
						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScAiSXpBlqk6M-dOJpBDNPcAfFIFFxjTqrRlhwcjcs&s"
								
								className="work-image"
							/>
							<div className="work-title">Jolly Industries</div>
							<div className="work-subtitle">
								Electrical Engineer
							</div>
							<div className="work-duration">Sep 2020 - Oct 2022</div>
						</div>
						<div className="work">
							<img
								src="https://techosa.in/wp-content/uploads/2023/07/cropped-User.bmp"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Techosa Edu Solutions Pvt. Ltd.</div>
							<div className="work-subtitle">
								Junior Engineer
							</div>
							<div className="work-duration">Jun 2019 - May 2020</div>
						</div>	<div className="work">
							<img
								src="https://scontent-maa2-1.xx.fbcdn.net/v/t39.30808-6/304851148_473085824830492_5384262058583612288_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-EscSI-4v5cAX-qHX30&_nc_ht=scontent-maa2-1.xx&oh=00_AfA6WMwykBphOFaODAnvXFcGytP-lJk60t3LI9f8ZrPrWg&oe=65621A88"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Earth N'Sky Constructions</div>
							<div className="work-subtitle">
								Electrical Engineer
							</div>
							<div className="work-duration">Aug 2017 - Apr 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
