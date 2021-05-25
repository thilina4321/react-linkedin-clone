import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import classes from "./profile.module.css";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.main}>
        <Main />
      </div>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Profile;
