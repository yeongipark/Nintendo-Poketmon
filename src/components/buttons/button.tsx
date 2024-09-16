import style from "./button.module.css";

export default function Button({ text }: { text: string }) {
  return (
    <div className={style.container}>
      <span className={style.text}>{text}</span>
    </div>
  );
}
