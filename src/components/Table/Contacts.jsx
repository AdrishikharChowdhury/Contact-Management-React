import React, { useState, useEffect, useContext } from "react";
import ContactSlider from "./ContactSlider";
import { PersonContext } from "../../contexts/PersonContext";
import TableHead from "./TableHead";
import TableFoot from "./TableFoot";

const Contacts = ({ setId, filterType, searchTerm }) => {
  const [data, refetch] = useContext(PersonContext);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (data) {
      const filteredContacts = data.filter((contact) => {
        if (!searchTerm) return true; // If no search term, show all
        const value = contact[filterType];
        return value && value.toString().toLowerCase().includes(searchTerm.toLowerCase());
      });
      setContacts(filteredContacts);
      refetch();
    }
  }, [data, refetch, filterType, searchTerm]);

  return (
    <div className="w-full h-full border-2 mt-10 rounded-2xl px-10 py-6 grow">
      <table className="w-full">
        <TableHead />
        <tbody className="w-full">
          {contacts.map((contact, idx) => (
            <ContactSlider
              setId={setId}
              contact={contact}
              idx={idx}
              key={contact.id}
            />
          ))}
        </tbody>
        <TableFoot contacts={contacts} />
      </table>
    </div>
  );
};

export default Contacts;
