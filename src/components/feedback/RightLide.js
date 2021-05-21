import Card from "../UI/elements/Card";
import classes from "./RightSide.module.css";

const feedback = [
  { name: "XPressJobs", description: "We are a job ....." },
  { name: "Game center", description: "Geming is one of ...." },
  { name: "Manoj Sathis", description: "We are hiring ..." },
];

const courses = [
  {
    name: "Six main habits in the morning",
    description: "In this course we are going to provide...",
  },
  {
    name: "React.js for developer.",
    description: "React is the most popular Js framework in these days",
  },
  {
    name: "How to be a successful person",
    description: "To be a successful person you need to know lots of things",
  },
];

const RightLide = () => {
  return (
    <section>
      <Card>
        <div className={classes.div}>
          <p> Add to Feed </p>
          {feedback.map((feed, index) => {
            return (
              <div key={index} className={classes.oneFeed}>
                <p className={classes.logo}> </p>
                <div className={classes.feedStyle}>
                  <div> {feed.name} </div>
                  <div> {feed.description} </div>
                  <div
                    style={{ border: "1px solid black", padding: "5px 5px" }}
                  >
                    {" "}
                    # Follow{" "}
                  </div>
                </div>
              </div>
            );
          })}
          <div> View All Recommondation... </div>
        </div>
      </Card>

      <Card>
        <div className={classes.courses} >
          <p> Today's Most viewd courses</p>
          {courses.map((crs, indes) => (
            <div key={indes} style={{marginTop:'10px'}}>
              <p>
                {indes + 1}. {crs.name}
              </p>
              <p style={{color:'grey'}}> {crs.description} </p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default RightLide;
