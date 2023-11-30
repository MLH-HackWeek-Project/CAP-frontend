import { Link } from "react-router-dom";
import "../css/Forms.css";

const Login = () => {
    return (
        <div className="form-grid">
            <div className="form-container">
                <form className="form" action="#">
                    <h2>Welcome Back</h2>
                    <button className="btn-submit btn-google" type="submit">
                        <img
                            className="icon small"
                            src="src/assets/google.svg"
                            alt="Google icon"
                        />
                        <p>Log in With Google</p>
                    </button>
                    <div className="or">
                        <div></div>
                        or
                        <div></div>
                    </div>
                    <input type="text" placeholder="Enter username..." />
                    <input type="password" placeholder="Enter Password..." />
                    <input
                        className="btn-submit"
                        type="submit"
                        value="Log in"
                    />
                    <p>
                        Do not have an account?{" "}
                        <Link className="re-direct" to="/register">
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
            <div className="welcome-container"></div>
        </div>
    );
};

export default Login;
