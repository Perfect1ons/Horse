import Link from "next/link";
import styles from "./style.module.scss";
import clsx from "clsx";

const NotFounded = () => {
  return (
    <section className={styles.not__found}>
      <div className={clsx(styles.not__found_container, "container")}>
        <span className={styles.not__found_custom}>404</span>
        <h1 className={styles.not__found_title}>Страница не найдена</h1>
        <p className={styles.not__found_desc}>
          страница, которую вы ищете, могла быть удалена из-за изменения ее
          названия или временно недоступна.
        </p>
        <Link className={styles.not__found__link} href={"/"}>
          <button className={styles.not__found_button}>
            Вернуться на главную
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFounded;
