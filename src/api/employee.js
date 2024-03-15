import axios from "axios"

export const fetchAllEmployees = async() => {
    const url = import.meta.env.VITE_API_URL;
    const res = await axios({
        url: `${url}/employees`,
        method: "get"
    });
    return res.data;
}