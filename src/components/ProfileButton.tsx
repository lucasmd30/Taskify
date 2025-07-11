import { MdAccountCircle } from "react-icons/md";

function ProfileButton() {
  return (
    <div className="flex flex-row bg-transparent rounded-[4px] hover:bg-button-primary transition-colors gap-[15px] px-[16px] py-[3px]">
      <MdAccountCircle className="w-[24px] h-[24px] text-white" />
      <span className="font-poppins font-semibold text-white">José</span>
    </div>
  );
}

export default ProfileButton;
