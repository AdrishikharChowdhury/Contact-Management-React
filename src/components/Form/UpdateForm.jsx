import React, { useContext, useEffect, useState } from "react";
import { PersonContext } from "../../contexts/PersonContext";
import { useFormUpdate } from "../../hooks/useFormUpdate";
import { usePUT } from "../../hooks/usePUT";
import { BASE_URL } from "../../js/config";
import Message from "./Message";

const UpdateForm = ({ id }) => {

    const [data, refetch] = useContext(PersonContext);

    const { editContact, handleChange, setEditContact } = useFormUpdate(
    data.find((contact) => contact.id === id)
  );
  const { message, putData }=usePUT(BASE_URL)
  const [isMessage, setIsMessage] = useState(false);

  useEffect(() => {
    if (message) {
      setIsMessage(true);
      const timer = setTimeout(() => {
        setIsMessage(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

    const handleSubmit = (e) => {
    e.preventDefault();
    putData(editContact,refetch)
    setEditContact({
      name: "",
      email: "",
      phone: "",
      company: "",
    });
    console.log(editContact);
  };

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <form
        onChange={(e) => handleChange(e)}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col gap-4 justify-center p-5 border-2 w-1/4 rounded-2xl text-lg font-bold shadow-2xl"
      >
        <label className="flex flex-col gap-2">
          <p>Name:</p>
          <input
            onChange={handleChange}
            type="text"
            value={editContact.name}
            name="name"
            placeholder={editContact.name}
            className="border-2 outline-0 p-2 rounded-2xl text-md font-normal"
          />
        </label>
        <label className="flex flex-col gap-2">
          <p>Phone No.</p>
          <input
            value={editContact.phone}
            onChange={handleChange}
            type="number"
            name="phone"
            placeholder={editContact.phone}
            className="border-2 outline-0 p-2 rounded-2xl text-md font-normal"
          />
        </label>
        <label className="flex flex-col gap-2">
          <p>Email:</p>
          <input
            value={editContact.email}
            type="email"
            onChange={handleChange}
            name="email"
            placeholder={editContact.email}
            className="border-2 outline-0 p-2 rounded-2xl text-md font-normal"
          />
        </label>
        <label className="flex flex-col gap-2">
          <p>Company:</p>
          <input
            value={editContact.company}
            type="text"
            onChange={handleChange}
            name="company"
            placeholder={editContact.company}
            className="border-2 outline-0 p-2 rounded-2xl text-md font-normal"
          />
        </label>
        <button
          type="submit"
          className="cursor-pointer px-6 py-3 rounded-2xl bg-chetwode-blue-700 self-center text-white font-semibold active:scale-90 duration-100 transition-all"
        >
          Update
        </button>
      </form>
      {isMessage && (
        <Message message={message} />
      )}
    </div>
  );
};

export default UpdateForm;
