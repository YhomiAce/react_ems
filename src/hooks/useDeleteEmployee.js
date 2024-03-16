import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEmployee } from "../api/employee";

const useDeleteEmployee = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });
  return mutation;
};

export default useDeleteEmployee;