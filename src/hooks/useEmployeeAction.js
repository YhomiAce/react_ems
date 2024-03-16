import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEmployee } from "../api/employee";

export default function () {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["employees"],
    mutationFn: addEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });
  return mutation;
}
