import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import initialContacts from "../../contacts.json";
import css from "./App.module.css";

export default function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    const saveContacts = window.localStorage.getItem(
      "saved-contacts"
    );
    return saveContacts !== null
      ? JSON.parse(saveContacts)
      : initialContacts;
  });

  useEffect(() => {
    window.localStorage.setItem(
      "saved-contacts",
      JSON.stringify(contacts)
    );
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    setContacts(() => {
      return [...contacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(
        (contact) => contact.id !== contactId
      );
    });
  };

  return (
    <>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAdd={handleAddContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList
          contacts={visibleContacts}
          onDelete={deleteContact}
        />
      </div>
    </>
  );
}
