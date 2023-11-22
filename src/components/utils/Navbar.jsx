const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">App Logo</span>
            <div className="ctas">
                <img
                    className="icon small"
                    src="src/assets/search.svg"
                    alt="Search icon"
                />
                <img
                    className="icon user"
                    src="src/assets/user.svg"
                    alt="User icon"
                />
                <img
                    className="icon small"
                    src="src/assets/notification.svg"
                    alt="Notification icon"
                />
                <button className="btn">Apply</button>
            </div>
        </div>
    );
};

export default Navbar;
