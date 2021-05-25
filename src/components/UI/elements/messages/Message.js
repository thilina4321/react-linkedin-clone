import classes from "./message.module.css";
import Card from "../../elements/Card";
import { useState } from "react";

const users = [
  { name: "Thilina Dilshan" },
  { name: "Dilshan Thiina" },
  { name: "Kumar Sangakkara" },
  { name: "Mahela Jayawardena" },
  { name: "Dimuth Karunarathne" },
];

const Message = () => {
  const [showfull, setShowMessages] = useState(false);

  const toggleMessage = () => {
    setShowMessages((prev) => !prev);
  };
  return (
    <Card>
      <div className={classes.main}>
        <div className={classes.message}>
          <div className={classes.avatar}></div>
          <p> Messaging </p>
          <p className={classes.toggle} onClick={toggleMessage}>
            {" "}
            ...{" "}
          </p>
        </div>

        <div></div>
        <hr />
        {showfull && <input placeholder="Search Messages" />}
        {showfull && (
          <div>
            {users.map((user, index) => (
              <div className={classes.my__message} key={index}>
                <div className={classes.avatar}> </div>
                <p> {user.name} </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default Message;
