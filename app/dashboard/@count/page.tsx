import axios from "axios";

const CountPage = async () => {
    const countLocation = await axios.get("http://localhost:4000/locations");
    return countLocation?.data?.length;
}
export default CountPage;