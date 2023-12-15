import styles from "./select.module.css";

type SelectOptions = {
  label: string;
  value: string | number | boolean;
};

type SelectProps = {
  options: SelectOptions[];
  value?: SelectOptions | undefined;
  onChange: (value: SelectOptions | undefined) => void;
};

const Select = ({ options, value, onChange }: SelectProps) => {
  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}>Value</span>
      <button className={styles["close-btn"]}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${styles.show}`}>
        {options.map((option) => (
          <li key={`option-${option.value}`} className={styles.option}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
