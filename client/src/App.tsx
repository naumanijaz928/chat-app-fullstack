import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const getUsers = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/users`);
      setUsers(res?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="App">
      <h2>getting data from my backend express API</h2>
      <ul>
        {users?.map((user) => (
          <li
            style={{
              border: "1px solid grey",
              padding: "10px",
              margin: "5px",
              borderRadius: "10px",
            }}
            key={user.id}
          >{`(${user.id}) ${user.name}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
