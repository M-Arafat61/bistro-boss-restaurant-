import useAuthContext from "./useAuthContext";

import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "./useAxiosInstance";

const useCart = () => {
  const axiosInstance = useAxiosInstance();
  const { user } = useAuthContext();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
