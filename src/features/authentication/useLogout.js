import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("Logged Out");
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
    onError: () => toast.error("Error while logging out"),
  });

  return { isLoading, logout };
}
