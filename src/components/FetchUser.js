import { useEffect, useState } from "react";

const FetchUser = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(user);

  return user.length > 0 ? (
    <div>
      <h2>Customer Details </h2>
      <h3>First Name: {user[0].name.first}</h3>
      <h3>Last Name: {user[0].name.last}</h3>
    </div>
  ) : (
    <h3>Getting customer details....</h3>
  );
};

export default FetchUser;
