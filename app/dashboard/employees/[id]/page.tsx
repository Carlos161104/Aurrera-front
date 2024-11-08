import EmployeeCard from "../_components/EmployeeCard"

const page = ({params}: {params: {id: string}}) => {
  return <EmployeeCard employee={employee} />
}

export default page
