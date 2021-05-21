import classes from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={classes.div}>
      <div className={classes.headbar}>
        <h1> LinkedIn </h1>
        <h4> Join Now </h4>
        <button> Sign In </button>
      </div>

      <div className={classes.second}>
        <h1 style={{color:'white'}} className={classes.google}> Sign In With Google </h1>
        <h1> Welcome to your professional community </h1>
        <img src="/link.png" alt="community" />
      </div>
    </div>
  );
};

export default HomePage;
