import { BsThreeDots } from "react-icons/bs";

function ListOptionsButton() {
  return (
    <div
      className="
        bg-transparent
        hover:bg-button-primary
        active:bg-button-secundary
        flex items-center justify-center 
        rounded-[2px]  
        transition-colors
        p-[4px]
      "
    >
      <BsThreeDots className="w-[24px] h-[24px] text-white" />
    </div>
  );
}

export default ListOptionsButton;
