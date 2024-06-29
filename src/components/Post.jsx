import React from "react";
import Items from "./Items";
import { useFetchUser } from "../hooks/useQuery";

const Post = () => {
  //be default react-query cash data for 5 min. However we can change it by passing third arguments. However during the cash
  //every time it perform fetch request behind the sceme (default stealtime is 0 second)
  //we can change the fetching time by using the stealtime property
  const {
    isLoading,
    error,
    data: res,
    isError,
    isFetching,
    refetch,
  } = useFetchUser("/users", onSuccess, onErrors);

  //callback handler after success
  function onSuccess() {
    console.log("success fetched data");
  }

  //callback handler after error
  function onErrors() {
    console.log("failed to fetched data");
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {res &&
        res?.data.map((item) => (
          <Items key={item.id} name={item.name} id={item.id} />
        ))}
    </div>
  );
};

export default Post;
