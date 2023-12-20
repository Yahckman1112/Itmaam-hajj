import { useState } from "react";




interface NotificationProps {
  title?: string;
  notification?: string;
  latest?: boolean;
  key:number
  createdAt?:  string | undefined
  
}



function NotificationCard({ title, notification, latest,key, createdAt }: NotificationProps) {
  const [readMore, setReadMore] = useState(true);
  // console.log(createdAt);
  // console.log(dayjs(createdAt).format('DD.MM.YYYY; HH:MM'));
  
  

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
        <p className="text-[#000] text-sm">{createdAt}</p>
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
