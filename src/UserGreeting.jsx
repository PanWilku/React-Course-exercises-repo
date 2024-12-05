import PropTypes from "prop-types";

function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );
  const loginMessage = (
    <h2 className="login-message">Please log in to continue</h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginMessage;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

export default UserGreeting;
