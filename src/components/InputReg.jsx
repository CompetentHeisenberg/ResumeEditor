import React from "react";

export default function InputReg(props) {
  const value = props.help;
  const style = props.style;
  return <input className={style} type="text" placeholder={value}></input>;
}
