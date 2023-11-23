import "../css/Content.css";
import Card from "./Card";

const Content = () => {
    const jobs = [
        { title: "Frontend developer", company: "Safaricom" },
        { title: "Backend developer", company: "Telkom" },
        { title: "Fullstack developer", company: "Telkom" },
    ];
    return (
        <div className="home-content">
            <div className="navigation">
                <img
                    className="icon small"
                    src="src/assets/grid.svg"
                    alt="Grid icon"
                />
                <img
                    className="icon small"
                    src="src/assets/menu.svg"
                    alt="Menu icon"
                />
            </div>
            <div className="jobs-grid">
                {jobs.map((job, index) => (
                    <Card key={index} job={job} />
                ))}
            </div>
        </div>
    );
};

export default Content;
