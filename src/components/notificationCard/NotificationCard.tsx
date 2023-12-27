import { useState } from "react";

import { FaRegTrashCan } from "react-icons/fa6";

interface NotificationProps {
  title?: string;
  notification?: string;
  latest?: boolean;
  key: number;
  createdAt?: string | undefined;
  onClick?: () => void;
}

function NotificationCard({
  title,
  notification,
  latest,
  key,
  createdAt,
  onClick,
}: NotificationProps) {
  const [readMore, setReadMore] = useState(true);

  return (
    <div
      key={key}
      className="w-full mb-6 bg-[#F2FFF7] cursor-pointer min-h-[88px] rounded-lg p-3 border border-solid border-l-4 border-y-0 border-x-0 border-[#1A8F4A]"
    >
      <div className="flex justify-end" onClick={onClick}>
        <FaRegTrashCan className="cursor-pointer -mt-5 mb-5 " />
      </div>

      <div
        onClick={() => {
          setReadMore(!readMore);
        }}
      >
        <div className="flex justify-between ">
          <p className="text-[#000] text-sm font-semibold">{title}</p>
          {latest && (
            <p className="text-[#FCC43E] tet-sm font-normal "> Latest</p>
          )}
          <p className="text-[#000] text-sm">{createdAt}</p>
        </div>

        <div className="flex justify-between">
          <p className=" text-gray-400 text-sm leading-9">
            {!readMore
              ? notification
              : notification?.substring(0, 65) + "......."}
            {/* {} */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
