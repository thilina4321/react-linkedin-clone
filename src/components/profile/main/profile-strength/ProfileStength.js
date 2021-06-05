import { useState } from "react";
import Card from "../../../UI/card/Card";
import classes from "./ProfileStrength.module.css";

const ProfileStength = () => {
  const [open, setopen] = useState(false);

  const toggleDisplay = () => {
    setopen((pre) => !pre);
  };

  return (
    <Card>
      <div className={classes.profile__strength}>
        <div className={classes.title}>
          <h2> Profile Strength -- Intermediate </h2>
          <span onClick={toggleDisplay}> *** </span>
        </div>
        <div className={classes.width}> </div>

        {open && (
          <div>
            {" "}
            <div className={classes.place}>
              <p> Where do you currently work? </p>
              <p>
                {" "}
                Over 2 milion peoplw search by position on LinkedIn every week{" "}
              </p>
            </div>
            <div className={classes.buttons}>
              <button> Does not apply </button>
              <button> Add current position </button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProfileStength;
