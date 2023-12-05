import { TableData, TableRow, TableHeader } from "./appTable.style";

interface TableProps {
  tableHeader: any[];
  showSerialNumber?: true;
  tableData?: any[];
  
}

function AppTable({ tableHeader, showSerialNumber, tableData }: TableProps) {
  const entries: any[] = [];

  if (tableHeader && Array.isArray(tableHeader)) {
    tableHeader.forEach((element: any) => {
      entries.push(element.key);
    });
  }
  console.log(entries);

  return (
    <div className=" max-w-[100%] overflow-x-scroll mb-14 ">
      <table className="w-[100%] border-collapse text-base  ">
        <thead>
          <tr>
            {showSerialNumber && (
              <th className="border text-left  rounded-tl-md bg-[#1A8F4A] text-[#fff] p-4 border-solid  border-x-0 border-y-0 border-b-2 border-[rgba(167, 207, 184, 0.4)]">
                S/N
              </th>
            )}
            {tableHeader.map((item: any, i: any) => (
              <TableHeader
                key={i}
                className="border text-left   bg-[#1A8F4A] text-[#fff] p-4 border-solid  border-x-0 border-y-0 border-b-2 border-[rgba(167, 207, 184, 0.4)]"
              >
                {item.label}
              </TableHeader>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableData &&
            tableData.map((row: any, i: number) => (
              <TableRow className="">
                {showSerialNumber && <TableData>{i + 1}</TableData>}
                {entries.map((item: any, i: number) => (
                  // i want to render base on the key of the header the key so if i have
                  // header with key : full name It mustb have full name i n the data as i do here
                  <TableData key={i}>{row[item]}</TableData>
                ))}
              </TableRow>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppTable;
