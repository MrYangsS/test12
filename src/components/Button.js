import PropTypes from "prop-types";

function Button({ label, backgroundColor = "red", size = "md", onClick }) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.25;
  const style = {
    backgroundColor, // 修改为 camelCase
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  };
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
}

Button.propTypes = { // 修改为小写 propTypes
  label: PropTypes.string,
  backgroundColor: PropTypes.string, // 修改为 camelCase
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
};

export default Button;
