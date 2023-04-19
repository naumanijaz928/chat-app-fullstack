import { useEffect, useState } from "react";
import User from "./User";
import { List, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";

type UserState = {
  id: number;
  name: string;
};

const UsersList = () => {
  const [users, setUsers] = useState<UserState[]>([]);
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
    <div>
      {/* <List spacing={13}> */}
      <SimpleGrid spacingX="10px" spacingY="20px" minChildWidth="200px">
        {users.map((data) => (
          <User user={data} />
        ))}
      </SimpleGrid>
      {/* </List> */}
    </div>
  );
};

export default UsersList;
