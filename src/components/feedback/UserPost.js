import Card from "../UI/elements/Card";
import classes from "./Main.module.css";

import ShareIcon from "../UI/Icons/ShareIcon";
import SendIcon from "../UI/Icons/SendIcon";
import CommentIcon from "../UI/Icons/CommentIcon";
import LikeIcon from "../UI/Icons/LikeIcon";

const UserPost = () => {
  return (
    <section>
      <Card>
        <div className={classes.div}>
          <div className={classes.post}>
            <div className={classes.avator}></div>
            <p> Name </p>
          </div>
          <p style={{ alignSelf: "flex-start", padding: "0 10px" }}>
            {" "}
            Description{" "}
          </p>
          <img src="/link.PNG" alt="imagePost" />
          <div className={classes.elements}>
            <div className={classes.ele}>
              <LikeIcon />
              <p>Like</p>
            </div>
            <div className={classes.ele}>
              <CommentIcon />
              <p>Comment</p>
            </div>
            <div className={classes.ele}>
              <ShareIcon />
              <p>Share</p>
            </div>
            <div className={classes.ele}>
              <SendIcon />
              <p>Send</p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default UserPost;
