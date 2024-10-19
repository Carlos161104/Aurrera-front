import EmployeesLocation from "./@locations/_Components/EmployeesLocation";

const Dashboard = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const store = Array.isArray(searchParams.store)
    ? searchParams.store[0]
    : searchParams.store;

  const storeNumber = parseInt(store, 10);

  if (isNaN(storeNumber)) {
    console.error("The 'store' parameter is not a valid number:", store);
    return (
      <div className="h-full w-5/12 bg-yellow-200">
        <div className="h-[94.2vh] m-5">
          <h1 className="text-2xl">Lista de empleados:</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="h-full w-5/12 bg-yellow-200">
        <div className="h-[94.2vh] m-5 overflow-hidden overflow-y-auto">
          <h1 className="text-2xl">Lista de empleados:</h1>
          <EmployeesLocation store={storeNumber} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
