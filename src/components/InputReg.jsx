import React from "react";

export default function InputReg(props) {
  const value = props.help;
  const style = props.style;
  const type = props.type;
  return <input className={style} type={type} placeholder={value}></input>;
}
