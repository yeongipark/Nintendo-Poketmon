import Button from "./button";
import style from "./buttons.module.css";

export default function Buttons() {
  return (
    <div className={style.container}>
      <div className={style.vertical}>
        <Button text="X" />
        <Button text="B" />
      </div>
      <div className={style.horizon}>
        <Button text="A" />
        <Button text="Y" />
      </div>
    </div>
  );
}
