import React from "react";
import { useParams } from "react-router-dom";
import { useFetchUserDetails } from "../hooks/useQuery";

const PostDetails = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: res,
    isError,
  } = useFetchUserDetails(
    `/users/${id}`,
    id,
    () => {},
    () => {}
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h1>{res?.uname}</h1>
    </div>
  );
};

export default PostDetails;
