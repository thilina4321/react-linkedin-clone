import Card from "../UI/elements/Card";
import classes from "./UserPost.module.css";

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
            <div className={classes.avatar}></div>
            <p> Thilina Dilshan </p>
          </div>

          <div>
          This is the description that we have to added for this post 
          this is a amazing post that every one can do with the help of our
          relatives
          </div>

          <img src="/link.PNG" alt="this-Isimage-of-the-post" />
        </div>

        <div className={classes.comment} >
          <div className={classes.user__avator}></div>
          <input />
        </div>
        
      </Card>
    </section>
  );
};

export default UserPost;
