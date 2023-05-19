import { useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddUserModal from "./components/AddUserModal";
import { Row, Col, Container } from "react-bootstrap";
import UserCard from "./components/UserCard";
import { UserContext } from "./contexts/Context";
import "./App.css";
import { Fab } from "@mui/material";
import useFetchUsers from "./customHooks/useFetchUsers";

export default function App() {
  const { users, setUsers } = useFetchUsers();
  const [numOfUsers, setNumOfUsers] = useState(users.length);

  // Add user modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          users: users,
          setUsers: setUsers,
          numOfUsers: numOfUsers,
          setNumOfUsers: setNumOfUsers,
        }}
      >
        <Container fluid className="container">
          <Row>
            {users.map((user) => {
              return (
                <Col
                  md={6}
                  xl={4}
                  xxl={3}
                  key={user.id}
                  className="userCardCol"
                >
                  <UserCard user={user} />
                </Col>
              );
            })}
          </Row>

          <Fab
            color="secondary"
            aria-label="add"
            onClick={handleOpen}
            className="AddButton"
          >
            <PersonAddIcon />
          </Fab>
        </Container>

        <AddUserModal open={open} handleClose={handleClose} />
      </UserContext.Provider>
    </div>
  );
}
