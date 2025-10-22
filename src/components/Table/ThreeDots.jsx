import React, { useContext } from "react";
import { Ellipsis } from "lucide-react";
import { PersonContext } from "../../contexts/PersonContext";
import { BASE_URL } from "../../js/config";
import { useDELETE } from "../../hooks/useDELETE";
import { Link } from "react-router-dom";

const ThreeDots = ({ handleMenu, menu, contact, setId }) => {
  const [_, refetch] = useContext(PersonContext);

  const { handleDelete } = useDELETE(BASE_URL, contact, refetch);

  const handleId=()=>{
    setId(contact.id);
  }

  return (
    <td className="px-3 absolute z-10 right-30 size-5">
      <button onClick={handleMenu} className="cursor-pointer">
        <Ellipsis className="z-20" />
      </button>
      {menu && (
        <ul className="text-white rounded-2xl px-5 py-4 relative z-30 right-30 bottom-5 w-30 flex flex-col justify-center gap-5 bg-chetwode-blue-700 shadow-2xl">
          <Link to="/update">
            <button onClick={handleId} className="w-full cursor-pointer text-left font-semibold">Edit</button>
          </Link>
          <button
            onClick={handleDelete}
            className="w-full cursor-pointer text-left font-semibold"
          >
            Delete
          </button>
        </ul>
      )}
    </td>
  );
};

export default ThreeDots;
