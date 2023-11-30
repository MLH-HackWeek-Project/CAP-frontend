import { Link } from "react-router-dom";
import "../css/Forms.css";

const Register = () => {
    return (
        <div className="form-grid">
            <div className="form-container">
                <form className="form" action="#">
                    <h2>Sign Up</h2>
                    <button className="btn-submit btn-google" type="submit">
                        <img
                            className="icon small"
                            src="src/assets/google.svg"
                            alt="Google icon"
                        />
                        <p>Sign Up With Google</p>
                    </button>
                    <div className="or">
                        <div></div>
                        or
                        <div></div>
                    </div>
                    <input type="text" placeholder="Enter username..." />
                    <input type="email" placeholder="Enter Email..." />
                    <input type="password1" placeholder="Enter Password..." />
                    <input
                        type="password2"
                        placeholder="Re-enter Password..."
                    />
                    <input
                        className="btn-submit"
                        type="submit"
                        value="Sign Up"
                    />
                    <p>
                        Already have an account?{" "}
                        <Link className="re-direct" to="/login">
                            Log in
                        </Link>
                    </p>
                </form>
            </div>
            <div className="welcome-container"></div>
        </div>
    );
};

export default Register;
