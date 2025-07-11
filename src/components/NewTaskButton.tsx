import { BsFillPlusCircleFill } from "react-icons/bs";

function NewTaskButton() {
  return (
    <div
      className="
        bg-transparent
        hover:bg-button-primary
        flex flex-row
        rounded-[4px]  
        transition-colors
        gap-[12px]
        p-3
      "
    >
      <BsFillPlusCircleFill className="w-[24px] h-[24px] text-white"/>
      <span className="font-poppins font-semibold text-white">Nova Tarefa</span>
    </div>
  );
}

export default NewTaskButton;
