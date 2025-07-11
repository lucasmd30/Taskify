import { BsBellFill } from "react-icons/bs";

interface NotificationButtonProps {
  hasNotification: boolean;
}

function NotificationButton({ hasNotification }: NotificationButtonProps) {
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
      <div className="relative">
        <BsBellFill className="w-[24px] h-[24px] text-white" />

        {hasNotification && (
          <span
            className="
              absolute
              -top-[2px] 
              -right-[2px] 
              w-[10px] 
              h-[10px] 
              bg-[#880000]
              rounded-full 
            "
          />
        )}
      </div>
    </div>
  );
}

export default NotificationButton;
