import React from "react";
import { UserPen, ArrowLeftCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CreateForm from "../../components/Form/CreateForm";

const CreateContact = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-1/4 p-5 flex justify-between items-center">
        <button className="cursor-pointer" onClick={handleBack}>
          <ArrowLeftCircle className="size-10" />
        </button>
        <UserPen className="size-20 self-center w-full" />
      </div>
      <CreateForm />
    </div>
  );
};

export default CreateContact;
