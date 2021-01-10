import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users";
import Card from "./CardComponent";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {users.loading && <p>Loading...</p>}
      {users.length > 0 &&
        users.map((user) => <Card user={user} key={user.id} />)}
      {users.length === 0 && <p>No users available</p>}
      {error && !loading && error}
    </>
  );
};

export default Users;
