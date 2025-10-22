import React from "react";
import { ArrowLeftCircle, UserPen } from "lucide-react";
import { useNavigate } from "react-router-dom";

import UpdateForm from "../../components/Form/UpdateForm";

const UpdateContact = ({ id }) => {
  

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="w-1/4 p-5 flex justify-between items-center">
        <button className="cursor-pointer" onClick={handleBack}>
          <ArrowLeftCircle className="size-10" />
        </button>
        <UserPen className="h-20 self-center w-full rounded-full" />
      </div>
      <UpdateForm id={id} />
    </div>
  );
};

export default UpdateContact;
