import { STEPS } from "@/constants/constants";
import css from "./ServiceHowWork.module.css";
import { useTranslations } from "next-intl";

export default function ServiceHowWork() {
  const t = useTranslations("STEPS");

  return (
    <div className={css.container}>
      <div className={css.stepsBlock}>
        {STEPS.map((step) => {
          const numKey = `num${step.id}`;
          const titleKey = `title${step.id}`;
          const descKey = `desc${step.id}`;

          return (
            <div key={step.id} className={css.stepCard}>
              <div className={css.stepHead}>
                <div className={css.stepNumber}>{t(numKey)}</div>
                <div className={css.stepTitle}>{t(titleKey)}</div>
              </div>
              <p className={css.stepDesc}>{t(descKey)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
