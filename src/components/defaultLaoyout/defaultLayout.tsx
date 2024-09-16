import { ReactNode } from "react";
import JoyStick from "../joystick/joystick";
import Buttons from "../buttons/buttons";
import style from "./defaultLayout.module.css";
export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <div className={style.display}>
        <div className={style.screen}>{children}</div>
        <div className={style.displayButtons}>
          <div className={style.lButton}>L</div>
          <div className={style.rButton}>R</div>
        </div>
      </div>
      <div className={style.bottomButtons}>
        <JoyStick />
        <Buttons />
      </div>
    </div>
  );
}
