import propTypes from "prop-types";

export default function CheckBox({ text, className, ...rest }) {
  return (
    <>
      {/* <label>
        <input type={rest} />
        <span>{text}</span>
      </label> */}
      <label className={className}>
        <input type="checkbox" {...rest} /> <span>{text}</span>
      </label>
    </>
  );
}
CheckBox.propTypes = {
  rest: propTypes.object,
  text: propTypes.string,
  className: propTypes.any,
};
