import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import style from "./Navigationbar.module.css"

const NavigationBar = () => {
  const { link } = useSelector((state) => state.navigationbar);
  return (
    <nav>
      <div className={style.background}>
        {link.map((link, index) => (
          <NavLink key={index} className={style.navDecoration}>{link.navigate}</NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
