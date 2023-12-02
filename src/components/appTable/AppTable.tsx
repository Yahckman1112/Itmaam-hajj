import { TableData, TableRow } from "./appTable.style";

function AppTable() {
  return (
    <div className=" max-w-[100%] overflow-x-scroll mb-14">
      <table className="w-[100%] border-collapse text-sm md:text-base ">
        <thead>
            <tr>
                <th className="border  rounded-tl-md bg-[#1A8F4A] text-[#fff] p-4 border-solid  border-x-0 border-y-0\ border-b-2 border-[rgba(167, 207, 184, 0.4)]">S/N</th>
                <th  className="border   bg-[#1A8F4A] text-[#fff] p-4 border-solid  border-x-0 border-y-0\ border-b-2 border-[rgba(167, 207, 184, 0.4)]">Fullname</th>
                <th  className="border   bg-[#1A8F4A] text-[#fff] p-4 border-solid  border-x-0 border-y-0\ border-b-2 border-[rgba(167, 207, 184, 0.4)]"> Email</th>
                <th  className="border rounded-tr-md  bg-[#1A8F4A] text-[#fff] p-4 border-solid  border-x-0 border-y-0\ border-b-2 border-[rgba(167, 207, 184, 0.4)]">Role</th>
            </tr>
        </thead>

        <tbody>
            <TableRow className="text-center">
                <TableData >1</TableData>
                <TableData >name of names</TableData>
                <TableData >name of names</TableData>
                <TableData >name of names</TableData>
 </TableRow>
            <TableRow className="text-center p-4">
                <TableData >2</TableData>
                <TableData >Adewale Tobiloba Daniel</TableData>
                <TableData >testgmail@gmail.com</TableData>
                <TableData >Treasurer</TableData>
 </TableRow>
            <TableRow className="text-center">
                <TableData >3</TableData>
                <TableData >name of names</TableData>
                <TableData >name of names</TableData>
                <TableData >name of names</TableData>
 </TableRow>
        </tbody>
      </table>
    </div>
  );
}

export default AppTable;
