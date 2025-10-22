import React, { useState } from 'react'

export const useFormUpdate = (contact) => {
  const [editContact, setEditContact] = useState({
    id: contact.id,
    name: `${contact.name}`,
    email: `${contact.email}`,
    phone: contact.phone || "",
    company: `${contact.company}`,
    createdAt: new Date().toLocaleDateString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return { editContact, handleChange, setEditContact };
}