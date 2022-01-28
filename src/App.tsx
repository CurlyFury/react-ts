import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "./types/types";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users/"
      );
      console.log(response.data);
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <Card
        onclick={() => console.log("Работает")}
        variant={CardVariant.primary}
        width="200px"
        height="200px"
      >
        <button>ТЫК !</button>
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;
