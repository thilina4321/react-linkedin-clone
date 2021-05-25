import classes from "./Sidebar.module.css";
import Card from "../../UI/card/Card";

const users = [1,2,3,4]

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Card>
        <div className={classes.first}>
          <p>Edit public profile URL</p>
          <hr />
          <p>Add profile in another language</p>
        </div>
      </Card>

      <Card>
        <h4 style={{margin:'10px'}}> People also viewed </h4>
        {
          users.map((user, index)=>  <div key={index} className={classes.user}>
          <p className={classes.view__avatar}>  </p>
          <div className={classes.user__details}>
              <p> Name </p>
              <p> status of the user </p>
              <p> Connect </p>
          </div>
      </div>)
        }
        
      </Card>

    </div>
  );
};

export default Sidebar;
