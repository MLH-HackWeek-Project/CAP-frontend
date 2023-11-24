import { useState } from "react";
import "../css/Content.css";
import Card from "./Card";
import List from "./List";

const Content = () => {
    const jobs = [
        { title: "Frontend developer", company: "Safaricom" },
        { title: "Backend developer", company: "Telkom" },
        { title: "Fullstack developer", company: "Telkom" },
        { title: "Frontend developer", company: "Safaricom" },
        { title: "Backend developer", company: "Telkom" },
        { title: "Fullstack developer", company: "Telkom" },
        { title: "Frontend developer", company: "Safaricom" },
        { title: "Backend developer", company: "Telkom" },
        { title: "Fullstack developer", company: "Telkom" },
        { title: "Frontend developer", company: "Safaricom" },
        { title: "Backend developer", company: "Telkom" },
        { title: "Fullstack developer", company: "Telkom" },
    ];

    // States
    const [view, setView] = useState(true);

    const set_display_view = () => {
        if (window.innerWidth > 568) {
            if (view) {
                return (
                    <div className="jobs-grid">
                        {jobs.map((job, index) => (
                            <Card key={index} job={job} />
                        ))}
                    </div>
                );
            } else {
                return (
                    <div className="jobs-list">
                        {jobs.map((job, index) => (
                            <List key={index} job={job} />
                        ))}
                    </div>
                );
            }
        } else {
            return (
                <div className="jobs-grid">
                    {jobs.map((job, index) => (
                        <Card key={index} job={job} />
                    ))}
                </div>
            );
        }
    };

    // Toggle view functions
    const setViewGrid = () => (!view ? setView(true) : "");
    const setViewList = () => (view ? setView(false) : "");

    return (
        <div className="home-content">
            <div className="navigation">
                <img
                    className="icon small"
                    src="src/assets/grid.svg"
                    alt="Grid icon"
                    onClick={setViewGrid}
                />
                <img
                    className="icon small"
                    src="src/assets/menu.svg"
                    alt="Menu icon"
                    onClick={setViewList}
                />
            </div>
            {set_display_view()}
        </div>
    );
};

export default Content;
