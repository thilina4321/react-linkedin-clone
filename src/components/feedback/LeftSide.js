import classes from "./LeftSide.module.css";
import Card from "../UI/elements/Card";
import Camera from "../UI/Icons/camera";
import Connection from "../UI/Icons/connection";
import Add from "../UI/Icons/Add";

const LeftSide = () => {
  return (
    <section>
      <Card>
        <div className={classes.section}>
          <div className={classes.title}></div>
          <div className={classes.camera}>
            <Camera />
          </div>
          <p> Welcome there!</p>
          <p> Add Image </p>
        </div>
      </Card>

      <Card>
        <section className={classes.connection__section}>
        
          <div className={classes.connection}>
            <p style={{flex:'1'}}> Connection </p>
            <div style={{ width: "50px" }}>
              <Connection />
            </div>
          </div>

          <p> Grow your network </p>
        </section>
      </Card>

      <Card>
        <section className={classes.connection__section}>

          <div className={classes.connection}>
            <p style={{flex:'1'}}> Groups </p>
            <div style={{ width: "50px" }}>
              <Add />
            </div>
          </div>

          <p> Events </p>
          <p> HashTags </p>
        </section>
      </Card>

    </section>
  );
};

export default LeftSide;
