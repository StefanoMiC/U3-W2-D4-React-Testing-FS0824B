import { useEffect, useState } from "react";
import { FormControl, ListGroup } from "react-bootstrap";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");

      if (resp.ok) {
        const usersArray = await resp.json();

        setUsers(usersArray);
      }
    };

    getUsers();
  }, []);

  return (
    <>
      <h3>Fetch users</h3>
      <FormControl
        type="text"
        className="my-3"
        placeholder="Cerca utente per nome"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        data-testid="filterInput"
      />
      <ListGroup as="ul">
        {users
          .filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map(user => (
            <ListGroup.Item as="li" key={user.id}>
              {user.name} — {user.email}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
};

export default FetchUsers;
