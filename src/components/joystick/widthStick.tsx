import style from "./widthStick.module.css";

export default function WidthStick() {
  return (
    <div className={style.container}>
      <div className={style.widthStick}>
        <div className={style.whiteStickWrap}>
          <div className={style.whiteStick}></div>
          <div className={style.whiteStick}></div>
        </div>
      </div>
    </div>
  );
}
