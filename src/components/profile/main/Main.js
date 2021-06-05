import classes from "./Main.module.css";
import ProfileStength from "./profile-strength/ProfileStength";

const Main = () => {
  return (
    <div className={classes.main}>
      <div className={classes.item__1}>
        <div className={classes.cover}></div>
        <div className={classes.avatar}></div>
        <div className={classes.details}>
          <h2> Thilina Dilshan </h2>
          <p> Student at Institute Of Technology University Of Moratuwa </p>
          <p style={{color:'blue'}}> 500+ Connections </p>
          <div className={classes.buttons}>
            <button> Open to </button>
            <button> Add Section </button>
            <button> More </button>
          </div>

          <div className={classes.next}>
            <p>Show recruiters you are open to work -- </p>
            <p>Share that you are hiring -- </p>
          </div>
        </div>
      </div>
      <ProfileStength/>
    </div>
  );
};

export default Main;
