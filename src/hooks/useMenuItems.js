import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import { axiosPublic } from "./useAxiosPublic";

const useMenuItems = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then(res => res.json())
  //     .then(data => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);

  const {
    data: menu = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const response = await axiosPublic.get("/menu");
      return response.data;
    },
  });
  return [menu, loading, refetch];
};
export default useMenuItems;
