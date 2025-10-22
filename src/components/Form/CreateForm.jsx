import React, { useContext, useEffect, useState } from "react";
import { usePost } from "../../hooks/usePost";
import { BASE_URL } from "../../js/config";
import { PersonContext } from "../../contexts/PersonContext";
import { CircleUserRound, Plus } from "lucide-react";
import { useForm } from "../../hooks/useForm";
import Message from "./Message";

const CreateForm = () => {
  const [_, refetch] = useContext(PersonContext);
  const { form, handleChange, setForm } = useForm();
  const { message, postData } = usePost(`${BASE_URL}/new`);
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
    postData(form, refetch);
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
    });
  };

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        onChange={(e) => {
          handleChange(e);
        }}
        className="border-2 shadow-xl rounded-2xl flex flex-col p-10 gap-5 text-lg font-bold w-1/4"
      >
        <label className="flex flex-col gap-2">
          <p>Name:</p>
          <input
            type="text"
            name="name"
            id=""
            className="outline-0 border-2 p-3 rounded-2xl text-md font-normal"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col gap-2">
          <p>Phone No.</p>
          <input
          value={form.phone}
            type="number"
            name="phone"
            id=""
            className="outline-0 border-2 p-3 rounded-2xl text-md font-normal"
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col gap-2">
          <p>Email:</p>
          <input
          value={form.email}
            type="email"
            name="email"
            id=""
            className="outline-0 border-2 p-3 rounded-2xl text-md font-normal"
            onChange={handleChange}
          />
        </label>

        <label className="flex flex-col gap-2">
          <p>Company:</p>
          <input
          value={form.company}
            type="text"
            name="company"
            id=""
            className="outline-0 border-2 p-3 rounded-2xl text-md font-normal"
            onChange={handleChange}
          />
        </label>
        <button
          type="add"
          className="py-4 px-5 rounded-2xl shadow-lg flex justify-center items-center gap-1 text-white bg-chetwode-blue-600 
        hover:bg-chetwode-blue-800 text-lg active:scale-90 duration-100 transition-all font-semibold cursor-pointer self-center w-40"
        >
          <CircleUserRound /> <Plus className="font-semibold" />
        </button>
      </form>
      {isMessage && (
        <Message message={message} />
      )}
    </div>
  );
};

export default CreateForm;
