/* eslint-disable react/prop-types */
import "../css/JobCard.css";

const Card = ({ job }) => {
    return (
        <div className="job-container">
            <div className="job-info">
                <div className="job-header">
                    <h2>{job.title}</h2>
                    <img
                        className="icon small"
                        src="src/assets/three-dots.svg"
                        alt="Three dots"
                    />
                </div>
                <span className="job-company">{job.company}</span>
                <p className="job-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="job-details">
                <span className="time">1 hour ago</span>
            </div>
        </div>
    );
};

export default Card;
