import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./LoginForm.css";

const LoginForm = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSignInTextClick = useCallback(() => {
    navigate("/16");
  }, [navigate]);

  return (
    <form className={`login-form ${className}`}>
      <div className="login-form-child" />
      <div className="signup-button">
        <div className="button-container">
          <div className="signup-label">
            <h1 className="sign-up2">SIGN UP</h1>
          </div>
          <div className="please-fill-the">
            Please fill the details and create account
          </div>
        </div>
      </div>
      <div className="input-fields">
        <div className="username">
          <div className="username-child" />
          <div className="username-input">
            <div className="username-input-child" />
            <img className="user-icon" alt="" src="/user-icon.svg" />
          </div>
          <input
            className="username-field"
            placeholder="USERNAME"
            type="text"
          />
        </div>
      </div>
      <div className="input-fields">
        <div className="username">
          <div className="username-child" />
          <div className="rectangle-parent3">
            <div className="password-icons-child" />
            <img
              className="email-envelope-3-streamline-n-icon"
              alt=""
              src="/emailenvelope3streamlinenovasvg.svg"
            />
          </div>
          <input className="mail-item" placeholder="EMAIL" type="text" />
        </div>
      </div>
      <div className="password-fields-parent">
        <div className="password-fields">
          <div className="username-child" />
          <div className="password-input1">
            <div className="password-icons">
              <div className="password-icons-child" />
              <img
                className="lock-streamline-microsvg-icon"
                alt=""
                src="/lockstreamlinemicrosvg.svg"
              />
            </div>
            <input
              className="password-labels"
              placeholder="PASSWORD"
              type="text"
            />
          </div>
          <div className="visibility-toggles">
            <img className="eyeicon2" alt="" src="/eyeicon1.svg" />
          </div>
        </div>
        <div className="password-hint">
          <div className="password-must-be">Password must be 8 character</div>
        </div>
        <div className="password1">
          <div className="username-child" />
          <div className="frame-parent8">
            <div className="rectangle-parent3">
              <div className="password-icons-child" />
              <img
                className="lock-streamline-microsvg-icon1"
                alt=""
                src="/lockstreamlinemicrosvg-1.svg"
              />
            </div>
            <input
              className="frame-input"
              placeholder="CONFIRM PASSWORD"
              type="text"
            />
          </div>
          <div className="eyeicon-wrapper">
            <img className="eyeicon3" alt="" src="/eyeicon-1.svg" />
          </div>
        </div>
      </div>
      <div className="submit-button">
        <button className="group-button">
          <div className="frame-child34" />
          <div className="sign-up3">SIGN UP</div>
        </button>
      </div>
      <div className="account-options-wrapper">
        <div className="account-options">
          <div className="login-option">
            <div className="login-link">
              <div className="already-have-an">Already have an account</div>
              <div className="sign-in2" onClick={onSignInTextClick}>
                Sign in
              </div>
            </div>
            <div className="social-login">
              <div className="or-connect">Or connect</div>
            </div>
          </div>
          <div className="social-buttons">
            <div className="social-icons">
              <img
                className="icons8-google-48-11"
                loading="lazy"
                alt=""
                src="/icons8google48-11@2x.png"
              />
              <img
                className="icons8-google-48-11"
                loading="lazy"
                alt=""
                src="/icons8facebook48-11@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
};

export default LoginForm;