import { useState } from "react";
import HOMEICON from "../UI/Icons/home";
import JOBICON from "../UI/Icons/job";
import MESSAGEICON from "../UI/Icons/message";
import NETWORKICON from "../UI/Icons/network";
import classes from "./Header.module.css";

const Header = () => {

    const [open, setOpen] = useState(false)

    const openSignOut = ()=>{
        setOpen(pre=> !pre)
    }

  return (
    <header className={classes.header}>
      <h1> Logo </h1>
      <input />
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
        <div onClick={openSignOut} className={`${classes.user} ${classes.element}`} >
          
        </div>

        <dialog className={classes.dialog} open={open}> <div> Do you want to log out </div>  </dialog>
      </nav>
    </header>
  );
};

export default Header;
