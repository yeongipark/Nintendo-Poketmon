import HeightStick from "./heigthStick";
import style from "./joystick.module.css";
import WidthStick from "./widthStick";

export default function JoyStick() {
  return (
    <div className={style.container}>
      <WidthStick />
      <HeightStick />
    </div>
  );
}
