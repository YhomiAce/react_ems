import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEmployee } from "../api/employee";

export const useUpdateEmployee = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({id, body}) => updateEmployee(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });
  return mutation;
};
