import { faBook } from "@fortawesome/free-solid-svg-icons";
import "./education.css"
import Card from "../Card/Card";
const Education = () => {
	return (
		<div className="educations">
			<Card
				icon={faBook}
				title="Education"
				body={
					<div className="edu-body">
						<div className="edu">
							<img
								src="https://scontent-maa2-2.xx.fbcdn.net/v/t39.30808-6/295114892_481857323945217_8967359486035479790_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_8-BG1CHYdwAX-5e0Pa&_nc_ht=scontent-maa2-2.xx&oh=00_AfA0dFgCtq3RZALp6uyjD_zfOJ421z22_Hj7jzU5es-Twg&oe=65635222"
								className="edu-image"
							/>
							<div className="edu-title">Btech in Electrical and Electronics Engineering</div>
							<div className="edu-subtitle">
								Younus College of engineering and Technology,Kollam,Kerala
                                <div className="edu-duration">2013 - 2017</div>
							</div>
                           
							
						</div>
					
						
						
						</div>	
				
				}
			/>
		</div>
	);
};

export default Education;