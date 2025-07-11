import { BsArrowBarRight } from "react-icons/bs";

function CloseTaskButton() {
  return (
    <div
      className="
        p-[4px]
        bg-transparent
        hover:bg-button-primary
        active:bg-button-secundary
        flex items-center justify-center 
        rounded-[2px]  
        transition-colors
      "
    >
      <BsArrowBarRight className="w-[24px] h-[24px] text-white" />
    </div>
  );
}

export default CloseTaskButton;
