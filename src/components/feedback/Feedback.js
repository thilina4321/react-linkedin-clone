import Header from "./Header";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightLide from "./RightLide";

import classes from "./Feedback.module.css";
import Message from "../UI/elements/messages/Message";



        

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
      <div className={classes.message}>
        <Message />
      </div>
    </div>
  );
};

export default Feedback;
