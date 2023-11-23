import "../css/Aside.css";

const Aside = () => {
    const activities = ["Signed up", "Applied for a job"];

    return (
        <div className="home-aside">
            <div className="user-info">
                <div className="greet">
                    <img
                        className="user-avatar"
                        src="src/assets/user.jpg"
                        alt="User avatar"
                    />
                    <p>
                        Hello,
                        <br />
                        <span className="username">John</span>
                    </p>
                </div>
            </div>
            <hr />
            <div className="recents">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                    {/* <span className="no-content">No Content</span> */}
                    {activities.map((activity, index) => (
                        <div key={index} className="activity">
                            {activity}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Aside;
