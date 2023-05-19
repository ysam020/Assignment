import axios from "axios";

export async function addUser(values, setLoading, setMessage, userContext) {
  try {
    setLoading(true);
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      values
    );
    if (response.status === 201) {
      setMessage("User added successfully!");
      userContext.setUsers([
        ...userContext.users,
        {
          id: userContext.numOfUsers + 1, // set id equal to existing number of users + 1
          username: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
        },
      ]);
    } else {
      setMessage("Something went wrong, please try again.");
    }
  } catch (error) {
    console.error(error);
    setMessage("Something went wrong, please try again.");
  } finally {
    setLoading(false);
    userContext.setNumOfUsers((prev) => prev + 1); // update the number of users
  }
}
