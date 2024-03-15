import { useQuery } from "@tanstack/react-query";
import { fetchAllEmployees } from "../api/employee";

export default function () {
  return useQuery({
    queryKey: ["employees"],
    queryFn: fetchAllEmployees,
    // retry: false
  });
}
