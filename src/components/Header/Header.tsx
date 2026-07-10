
import css from './Header.module.css';

export default function Header() {
    return (
      <section className={css.header}>
        <div className="container">
          <div className={css.logo}>
            <h1>SRS</h1>
          </div>
        </div>
      </section>
    )
}
