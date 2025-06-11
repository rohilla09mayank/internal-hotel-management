import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  console.log(data);
  return {
    isLoading,
    user: data,
    isAuthenticated: data?.role === "authenticated",
  };
}
