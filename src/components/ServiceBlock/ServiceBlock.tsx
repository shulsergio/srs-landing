import { SERVICES } from "@/constants/constants";
import css from "./ServiceBlock.module.css";
import { useTranslations } from "next-intl";

export default function ServiceBlock() {
  const t = useTranslations("SERVICES");

  return (
    <div className={css.servicesGrid}>
      {SERVICES.map((service, index) => {
        const titleKey = `title${service.id}`;
        const descKey = `desc${service.id}`;
        const tagsKey = `tags${service.id}`;

        return (
          <div key={index} className={css.serviceCard}>
            <div className={css.iconWrapper}>{service.icon}</div>

            <h3 className={css.titleKey}>{t(titleKey)}</h3>
            <p className={css.descKey}>{t(descKey)}</p>

            <div className={css.serviceTags}>
              {t(tagsKey)
                .split(",")
                .map((tag) => (
                  <span key={tag.trim()} className={css.tagsKey}>
                    {tag.trim()}
                  </span>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
