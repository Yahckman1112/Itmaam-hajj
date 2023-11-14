import styles from "./client.module.scss";

interface ClientData {
  name?: string;
  date?: string;
  remark?: string;
  comment?: string;
  key: number;
}

function ClientsCard({ name, date, remark, comment, key }: ClientData) {
  return (
    <div>
      <div
        className={`bg-red-400 h-[70vh] relative px-7 py-7 ${styles.card}`}
        key={key}
      >
        <div className=" h-[50%] w-full  px-10 bg-[#31124bc1] justify absolute bottom-0 left-0 ">
          <div className="bg-[#FFFFFF] py-2 px-4 pr-10 leading-7 text-[#2d2c2c] w-fit -mt-8 mb-8 ">
            <p className=" font-bold uppercase font-sm">{name}</p>
            <p className="text-xs">{date}</p>
          </div>
          <div className="text-white ">
            <p className="text-2xl mb-4 font-semibold">" {remark} "</p>
            <p className="text-[15px] leading-7">{comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsCard;
