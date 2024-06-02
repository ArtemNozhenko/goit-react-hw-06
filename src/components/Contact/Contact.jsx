import { HiUser, HiPhone } from "react-icons/hi";
import css from "./Contact.module.css";

export default function Contact({
  data: { name, number, id },
  onDelete,
}) {
  return (
    <div className={css.container}>
      <div className={css.user}>
        <p className={css.span}>
          <HiUser size="24" /> {name}
        </p>
        <p className={css.span}>
          <HiPhone size="24" /> {number}
        </p>
      </div>

      <button
        className={css.button}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
