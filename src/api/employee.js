import axios from "axios"

export const fetchAllEmployees = async() => {
    const url = import.meta.env.VITE_API_URL;
    const res = await axios({
        url: `${url}/employees`,
        method: "get"
    });
    return res.data;
}

export const addEmployee = async (body) => {
    console.log({body});
    const url = import.meta.env.VITE_API_URL;
    const res = await axios({
        url: `${url}/employees`,
        method: "post",
        data: body
    });
    return res.data;
}

export const deleteEmployee = async (id) => {
    console.log({id});
    const url = import.meta.env.VITE_API_URL;
    const res = await axios({
        url: `${url}/employees/${id}`,
        method: "delete",
    });
    return res.data;
}