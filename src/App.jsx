import Loader from "./components/Loader";

function App() {
  console.log("App");
  return (
    <>
      <Loader />
      <div className="w-full h-screen text-white border bg-stone-900"></div>;
    </>
  );
}

export default App;
