import Header from "./Header";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightLide from "./RightLide";

import classes from "./Feedback.module.css";



        

const Feedback = () => {
  return (
    <div>
      <Header />
      <div className={classes.body}>
        <div className={classes.leftbar}>
          <LeftSide />
        </div>

        <div className={classes.middle}>
          <Main />
        </div>

        <div className={classes.rightbar}>
          <RightLide />
        </div>
        
      </div>
    </div>
  );
};

export default Feedback;
