const users = [
    { id: 1, name: "nauman ijaz", gender: "male", dob: "28-09-1998" },
    { id: 2, name: "Ahmad Ali", gender: "male", dob: "29-10-1999" },
    { id: 3, name: "shafiq ahmad", gender: "male", dob: "30-11-2000" },
    { id: 4, name: "Faran Shahid", gender: "male", dob: "1-12-2001" },
    { id: 5, name: "Usman Khalid", gender: "male", dob: "2-1-2002" },
  ];
  export const allUsers = (req, res) => {
    res.status(200).send(users);
  };
  