import styles from "./Iconbox.module.scss";
export function IconBox(icon)
{
    return (
        <div className={styles.feature + " bg-primary text-white rounded-3 mb-4"}>
      <i className={icon.icon}></i>
      </div>
    );
}