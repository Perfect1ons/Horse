import Link from "next/link";
import { InstagramIcon, VkIcon } from "../../../../public/icons/icons";
import styles from "./Media.module.scss";

const Media = () => {
  return (
    <div className={styles.contact__content}>
      <div className={styles.contact__content_media}>
        <Link className={styles.contact__content_icon} href={"https://vk.com/feed"}>
          <VkIcon />
        </Link>
        <Link className={styles.contact__content_icon} href={"https://www.instagram.com/meisan_06/"}>
          <InstagramIcon />
        </Link>
      </div>
    </div>
  );
};

export default Media;
