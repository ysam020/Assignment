import { useState, useEffect } from "react";
import axios from "axios";

function useFetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    }

    fetchUsers();
  }, []);

  return { users, setUsers };
}

export default useFetchUsers;
