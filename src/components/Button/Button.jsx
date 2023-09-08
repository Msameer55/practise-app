import React from "react";

const Button = (props) => {
  const {onClick, text , className} = props

  return (<button onClick={onClick} className={`btn ${className}`}>
  {text}
</button>
  )
};

Button.defaultProps = {
  color: "black",
  backgroundColor: "White",
};

export default Button;
