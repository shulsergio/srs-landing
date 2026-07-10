import css from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={css.footer}>
      <div className="container">
        <div className={css.footerCopy}>
          © {new Date().getFullYear()} AutoSRS.
        </div>
      </div>
    </section>
  );
}
