import { useState } from "react";

interface NotificationProps {
  title?: string;
  notification?: string;
  latest?: boolean;
  key:number
  
}

function NotificationCard({ title, notification, latest,key }: NotificationProps) {
  const [readMore, setReadMore] = useState(true);

  return (
    <div
      onClick={() => {
        setReadMore(!readMore);
      }}
      key={key}
      className="w-full mb-6 bg-[#F2FFF7] cursor-pointer min-h-[88px] rounded-lg p-3 border border-solid border-l-4 border-y-0 border-x-0 border-[#1A8F4A]"
    >
      <div className="flex justify-between ">
        <p className="text-[#000] text-sm font-semibold">{title}</p>
        {latest && (
          <p className="text-[#FCC43E] tet-sm font-normal "> Latest</p>
        )}
      </div>

      <div className="flex justify-between">
        <p className=" text-gray-400 text-sm leading-9">
          {!readMore
            ? notification
            : notification?.substring(0, 65) + "......."}
          {/* {} */}
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default NotificationCard;
