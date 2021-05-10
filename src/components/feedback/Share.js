import Card from "../UI/elements/Card";
import classes from "./Main.module.css";

import Video from "../UI/Icons/Video";
import Event from "../UI/Icons/Event";
import Article from "../UI/Icons/Article";
import Post from "../UI/Icons/Post";

const Share = () => {
  return (
    <section>
      <Card>
        <div className={classes.div}>
          <h3> Share </h3>
          <div className={classes.post}>
            <div className={classes.avator}></div>
            <input />
          </div>
          <div className={classes.elements}>
            <div className={classes.element}>
              <Post />
              <p>Post</p>
            </div>
            <div className={classes.element}>
              <Event />
              <p>Event</p>
            </div>
            <div className={classes.element}>
              <Video />
              <p>Video</p>
            </div>
            <div className={classes.element}>
              <Article />
              <p>Article</p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Share;
