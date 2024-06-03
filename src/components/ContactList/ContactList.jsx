import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  // const dispatch = useDispatch();
  const value = useSelector(selectContacts);

  return (
    <ul className={css.container}>
      {value.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}

// onDelete = { onDelete };
