import Card from "../UI/elements/Card";
import classes from "./Main.module.css";

import Video from "../UI/Icons/Video";
import Event from "../UI/Icons/Event";
import Article from "../UI/Icons/Article";
import Post from "../UI/Icons/Post";

const icons = [
  {icon: <Post/>, name:'Photo' },
  {icon: <Event/>, name:'Event' },
  {icon: <Article/>, name:'Article' },
  {icon: <Video/>, name:'Video' },
]

const Share = () => {
  return (
    <section>
      <Card>
        <div className={classes.post}>
          <div className={classes.avatar__and__input}>
            <div className={classes.avatar}></div>
            <input  placeholder="Start a post"/>
          </div>

          <div className={classes.post__icons}>
          {
            icons.map((icon,index)=>  <div className={classes.one__icon} >
              <div style={{width:'60px'}}> {icon.icon} </div>
              <p> {icon.name} </p>
            </div>)
          }
          
          </div>

        </div>
      </Card>
    </section>
  );
};

export default Share;
