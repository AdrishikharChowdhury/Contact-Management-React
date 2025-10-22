import React, { useState } from "react";

export const usePUT = (url) => {
  const [message, setmessage] = useState("");

  const putData = async (info, refetch) => {
    if (
      info.name === "" &&
      info.email === "" &&
      info.phone === "" &&
      info.company === ""
    ) {
      return;
    }

    try {
      const response = await fetch(`${url}/update/${info.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      });

      if (!response.ok) throw new Error(response.statusText);
      await response.json();
      refetch();
      setmessage("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
      setmessage("There is an Error in the process");
    }
  };

  return { message, putData };
};
