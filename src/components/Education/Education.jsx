import { faBook } from "@fortawesome/free-solid-svg-icons";
import "./education.css";
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
              <img src="/ycet.jpg" className="edu-image" />
              <div className="edu-title">
                Btech in Electrical and Electronics Engineering
              </div>
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
