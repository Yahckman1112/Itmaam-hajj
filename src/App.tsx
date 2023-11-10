import PublicLayout from "./layout/PublicLayout";
import Router from "./routes";


function App() {
  return (
    <>
      {/* <h1 className="text-4xl font-bold ">Hello world!</h1> */}
   < PublicLayout>
    < Router/>
   </PublicLayout>
    </>
  );
}

export default App;
