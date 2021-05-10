import Card from "../UI/elements/Card";
import classes from './RightSide.module.css'

const RightLide = () => {
  return (
    <section>
      <Card>
        <div className={classes.div}>
          <p> Add to your feedback </p>
          <p> #LinkedIn </p>
          <h5> Follow </h5>
          <p> #Video </p>
          <h5> Follow </h5>
          <span> View all recommandations-- </span>
        </div>
      </Card>
    </section>
  );
};

export default RightLide;
