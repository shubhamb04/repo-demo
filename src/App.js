import React, { useState } from "react";
import fetchUser from "./fetchUser";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const getFullName = (userInfo) => {
  const { first, last } = userInfo;
  return `${first} ${last}`;
};

const App = () => {
    const [count, setCount] = useState(0);
    const [pageNumber, setPagenumber] = useState(1)
  const [user, setUser] = useState([]);

  function handleClick() {
    setCount(count + 1);
    fetchUser(pageNumber).then((randomData) => {
        setUser(randomData);
        setPagenumber(randomData.info.page + 1)
    });
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click</button>
      {user.map((info, idx) => (
        <div key={idx}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                // height="140"
                image={info.picture.large}
                alt={info.gender}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {getFullName(info.name)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </>
  );
};

export default App;
