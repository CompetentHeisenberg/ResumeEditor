import React, { useEffect } from "react";
import style from "../css/reg.module.css";
import Input from "../components/InputReg";
function Registration() {
  useEffect(() => {
    //CSS Для body
    document.body.style.backgroundColor = "rgb(180, 180, 180)";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.margin = "0";
    document.body.style.height = "100%";
  }, []);

  return (
    <div className={style.background}>
      <div className={style.leftpanel}>
        <img src="/home-office.jpg" alt="office"></img>
        <div className={style.leftdown}>
          <img src="/original.png" alt="office"></img>
          <label className={style.label}>Resume Construct</label>
        </div>
      </div>
      <div className={style.rightpanel}>
        <div className={style.regblock}>
          <div className={style.welcome}></div>
          <div className={style.dani}>
            <Input style={style.input} help={"Write Email"}></Input>
            <Input style={style.input} help={"Write Email"}></Input>
            <Input style={style.input} help={"Write Email"}></Input>
            <Input style={style.input} help={"Write Email"}></Input>
            <Input style={style.input} help={"Write Email"}></Input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
