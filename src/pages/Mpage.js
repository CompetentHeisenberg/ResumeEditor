import React from "react";
import style from "../css/mpage.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import headerstyle from "../css/header.module.css";
import footerstyle from "../css/footer.module.css";
function Mpage() {
  return (
    <div className={style.mainpage}>
      <Header style={headerstyle.main}></Header>
      <div className={style.maininfo}></div>
      <Footer style={footerstyle.main}></Footer>
    </div>
  );
}

export default Mpage;
