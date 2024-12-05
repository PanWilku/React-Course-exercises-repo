import logo from "./assets/logo_with_food.png";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="card">
      <img src={logo}></img>
      <h1>
        {props.name} is {props.status ? "online" : "offline"}
      </h1>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  name: "User",
  status: false,
};

export default Card;
