import React from "react";

export default function Label(props) {
  const style = props.style;
  return <label className={style}>{props.text}</label>;
}
