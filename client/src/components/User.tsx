import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  ListItem,
  Box,
} from "@chakra-ui/react";

interface Props {
  user: {
    id: number;
    name: string;
  };
}
const User = (props: Props) => {
  const { id, name } = props.user;
  return (
    // <ListItem
    //   style={{
    //     border: "1px solid grey",
    //     padding: "10px",
    //     margin: "5px",
    //     borderRadius: "10px",
    //   }}
    // >
    <Box bg="tomato" height="80px">
      {name}
    </Box>
    // </ListItem>
  );
};

export default User;
