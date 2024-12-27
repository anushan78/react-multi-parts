import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

function Student(props) {
  return (
    <div>
      <span className="pe-2">Name: {props.name}</span>
      <span className="pe-2">Age: {props.age}</span>
      <span className="pe-2">Is Student: {props.isStudent ? "Yes" : "No"}</span>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
