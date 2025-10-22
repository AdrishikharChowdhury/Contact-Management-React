import React from "react";
import { PersonContext } from "./PersonContext";
import { useFetch } from "../hooks/useFetch";
import { BASE_URL } from "../api/config";

const ContactContext = ({ children }) => {
  const { data, refetch } = useFetch(BASE_URL);

  return (
    <div>
      <PersonContext.Provider value={[data, refetch]}>
        {children}
      </PersonContext.Provider>
    </div>
  );
};

export default ContactContext;
