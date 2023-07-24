import ContactForm from "./contactForm/contactForm";
import ContactList from "./contactList/contactList";
import ContactFilter from "./contactFilter/contactFilter";

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </div>
  );
}
