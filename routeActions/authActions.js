export const allUsers = (req, res) => {
  res.status(200).send({ users: ["a", "b", "c"] });
};
