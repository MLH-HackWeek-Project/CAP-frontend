/* eslint-disable react/prop-types */
import "../css/List.css";

const List = ({ job }) => {
    return (
        <div className="list-container">
            <h4>{job.title}</h4>
            <h5>{job.company}</h5>
            <p className="list-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <div className="icons">
                <span className="time">1 hour ago</span>
                <img
                    className="icon small"
                    src="src/assets/three-dots.svg"
                    alt="Three dots"
                />
            </div>
        </div>
    );
};

export default List;
