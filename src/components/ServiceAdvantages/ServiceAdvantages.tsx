import { useTranslations } from "next-intl";
import css from "./ServiceAdvantages.module.css";
import { Advantages } from "@/constants/constants";

export default function ServiceAdvantages() {
  const t = useTranslations("Advantages");
  return (
    <div className={css.servicesGrid}>
      {Advantages.map((advantage, index) => {
        const titleKey = `title${advantage.id}`;
        const descKey = `desc${advantage.id}`;

        return (
          <div key={index} className={css.serviceCard}>
            <div className={css.iconWrapper}>{advantage.icon}</div>

            <h3 className={css.titleKey}>{t(titleKey)}</h3>
            <p className={css.descKey}>{t(descKey)}</p>
          </div>
        );
      })}
    </div>
  );
}
