import { useQuery } from "react-query";
import api from "../api/api";

export const useFetchUser = (path, onSuccess, onErrors) => {
  return useQuery(
    "fetchuser",
    async () => {
      return await api.get(`${path}`);
    },
    {
      staleTime: 5000,
      onSuccess: onSuccess,
      onError: onErrors,
    }
  );
};
export const useFetchUserDetails = (path, id, onSuccess, onErrors) => {
  return useQuery(
    ["user-details", id],
    async () => {
      return await api.get(`${path}`);
    },
    {
      select: (data) => {
        return {
          uname: data.data.name,
          id: data.data.id,
        };
      },
      staleTime: 5000,
      onSuccess: onSuccess,
      onError: onErrors,
    }
  );
};
