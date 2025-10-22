import React, { useEffect, useState } from "react";
import { Ellipsis } from "lucide-react";
import ThreeDots from "./ThreeDots";

const ContactSlider = ({ contact, idx, setId }) => {
  const [menu, setmenu] = useState(false);

  const changeBg = (idx) => {
    if (idx % 2 !== 0) {
      return "bg-white";
    }
    return "bg-chetwode-blue-50";
  };

  const handleMenu = (e) => {
    e.stopPropagation();
    setmenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClick = () => {
      if (menu) {
        setmenu(false);
      }
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [menu, setmenu]);

  return (
    <tr
      className={`w-full text-md flex justify-between items-center py-4 rounded-2xl ${changeBg(
        idx
      )}`}
    >
      <td className="w-full text-center">{contact.name}</td>
      <td className="w-full text-center">{contact.phone}</td>
      <td className="w-full text-center truncate max-w-xs">{contact.email}</td>
      <td className="w-full text-center truncate max-w-xs">
        {contact.company}
      </td>
      <td className="w-full text-center h-8 flex justify-center items-center">
        {contact.createdAt}
      </td>
      <ThreeDots
        setId={setId}
        contact={contact}
        handleMenu={handleMenu}
        menu={menu}
      />
    </tr>
  );
};

export default ContactSlider;
