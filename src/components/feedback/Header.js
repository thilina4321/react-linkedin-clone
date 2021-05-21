import { useState } from "react";
import HOMEICON from "../UI/Icons/home";
import JOBICON from "../UI/Icons/job";
import MESSAGEICON from "../UI/Icons/message";
import NETWORKICON from "../UI/Icons/network";
import classes from "./Header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const openSignOut = () => {
    setOpen((pre) => !pre);
  };

  return (
    <header className={classes.header}>
      <div className={classes.logoInput}>
        <img src="/linkedin.jpg" alt="logo" />
        <input />
      </div>
      <nav className={classes.nav}>
        <div className={classes.element}>
          <HOMEICON />
          <p>Home</p>
        </div>
        <div className={classes.element}>
          <NETWORKICON />
          <p>My Network</p>
        </div>
        <div className={classes.element}>
          <JOBICON />
          <p>Jobs</p>
        </div>
        <div className={classes.element}>
          <MESSAGEICON />
          <p>Messaging</p>
        </div>
        <div className={classes.element}>
          <MESSAGEICON />
          <p>Notification</p>
        </div>

        <div className={classes.element}>
          <div className={classes.user}> </div>
          <p>Me</p>
        </div>

        <div className={classes.element}>
          <MESSAGEICON />
          <p>Work</p>
        </div>

        <p style={{width:'80px',color:'orange' ,textAlign:'center'}}> Try premium free for 1 month </p>
        

        <dialog className={classes.dialog} open={open}>
          {" "}
          <div> Do you want to log out </div>{" "}
        </dialog>
      </nav>
    </header>
  );
};

export default Header;
