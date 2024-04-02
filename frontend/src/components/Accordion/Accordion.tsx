import cn from "clsx";
import styles from "./style.module.scss";
import { IAccordion } from "@/types/accordion";
import AccordionItem from "./AccordionItem/AccordionItem";


const Accordion = ({ accordion }: {accordion: IAccordion}) => {
  return (
    <section className={styles.accordion}>
      <div className={cn(styles.accordion__container, "container")}>
        <h1 className={styles.accordion__title}>Часто задаваемые вопросы</h1>
        {accordion.data.map((accor, id) => {
          return(
            <AccordionItem title={accor.title} desc={accor.description} key={id}/>
            )
        })}
      </div>
    </section>
  );
};

export default Accordion;
