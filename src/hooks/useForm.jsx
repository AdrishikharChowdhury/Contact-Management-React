import React, { useState } from "react";

export const useForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return { form, handleChange, setForm };
};
