// import Image from "next/image";
import css from "./page.module.css";

export default function Home() {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <div className={css.intro}>
          <h1>SRS </h1>
        </div>
      </main>
    </div>
  );
}
