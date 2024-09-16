import style from "./heigthStick.module.css";

export default function HeightStick() {
  return (
    <div className={style.container}>
      <div className={style.heightStick}>
        <div className={style.whiteStickWrap}>
          <div className={style.whiteStick}></div>
          <div className={style.whiteStick}></div>
        </div>
      </div>
    </div>
  );
}
