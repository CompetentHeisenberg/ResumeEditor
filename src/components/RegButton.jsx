import React from "react";

export default function Button(props) {
  const style = props.style;
  const type = props.type;
  return (
    <button className={style} type={type}>
      {props.children}
    </button>
  );
}
