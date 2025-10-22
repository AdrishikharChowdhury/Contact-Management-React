import { useState } from "react";

export const usePost = (url) => {
  const [message, setMessage] = useState("");

  const postData = async (form, refetch) => {
    if (
      form.name === "" &&
      form.email === "" &&
      form.phone === "" &&
      form.company === ""
    ) {
      return;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Network Issue: " + response.statusText);
      await response.json();
      refetch();
      setMessage("Contact Has Been Added To the List");
    } catch (error) {
      console.log(error);
      setMessage(`${error} happened during creation`);
    }
  };

  return { message, postData };
};
