// import Image from "next/image";ф
import Header from "@/components/Header/Header";
import css from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import ServiceBlock from "@/components/ServiceBlock/ServiceBlock";
import { useTranslations } from "next-intl";
import ServiceHowWork from "@/components/ServiceHowWork/ServiceHowWork";
import ServiceAdvantages from "@/components/ServiceAdvantages/ServiceAdvantages";

export default function Home() {
  const translate = useTranslations("Landing");
  return (
    <div className={css.page}>
      <Header />
      <main className={css.main}>
        <section className={css.hero}>
          <div className="container">
            <h1 className="hero-h1">{translate("title")}</h1>

            <p className="hero-p">
              Чистимо краш-дату та подушок безпеки (SRS). Проводимо діагностику,{" "}
              <span>прошивку та відновлення</span> блоків SRS після ДТП.
            </p>
            <div className="hero-stats">
              {[
                { val: "3 000+", label: "блоків відновлено" },
                { val: "8 років", label: "на ринку" },
                { val: "100%", label: "гарантія" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="stat-val">{s.val}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --------------- */}
        <section id="services" className={css.sectionServices}>
          <div className={css.container}>
            <p className={css.labeMono}> </p>
            <h2 className={css.sectionTitle}>{translate("ServiceTitle")}</h2>
            <ServiceBlock />
          </div>
        </section>

        {/* --------------- */}
        <section id="howWork" className={css.sectionHowWork}>
          <div className={css.container}>
            <p className={css.labeMono}> </p>
            <h2 className={css.sectionTitle}>{translate("HowWorkTitle")}</h2>
            <ServiceHowWork />
          </div>
        </section>

        {/* --------------- */}
        <section id="advantages" className={css.sectionAdvantages}>
          <div className={css.container}>
            <p className={css.labeMono}> </p>
            <h2 className={css.sectionTitle}>{translate("Advantages")}</h2>
            <ServiceAdvantages />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
