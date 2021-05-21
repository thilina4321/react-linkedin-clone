import classes from "./LeftSide.module.css";
import Card from "../UI/elements/Card";
import Camera from "../UI/Icons/camera";
import Connection from "../UI/Icons/connection";
import Add from "../UI/Icons/Add";

const recentActivities = [
  'Add post angular',
  'Certificate HackRank',
  'React Hooks',
  'Node js for Rest API',
  'Flutter UI tool kit'
]


const events = [
  'Subscribe',
  'Jobs',
  'Innovation'
]


const groups = [
  'Angular Developers',
  'Mobile with Flutter',
  'Walakulu'
]

const LeftSide = () => {

  return (
    <section>
      <Card>
        <div className={classes.section}>
          <div className={classes.title}></div>
          <div className={classes.camera}>
            <Camera />
          </div>
          <p> Thilina Dilshan</p>
          <div className={classes.job}>
            <div> Student at Institute Technplogy University of Moratuwa</div>
          </div>
        </div>
      </Card>

      <Card>
        <div className={classes.recent} >
          <p style={{color:'blue'}}> Recent </p>
          {
            recentActivities.map((act, index)=>{
              return <p style={{fontSize:'11px'}} key={index}> # {act}   </p>
            })
          }
        </div>
      </Card>

      <Card>
        <div className={classes.recent} >
          <p style={{color:'blue'}}> Groups </p>
          {
            groups.map((act, index)=>{
              return <p style={{fontSize:'11px'}} key={index}> # {act}   </p>
            })
          }
        </div>
      </Card>

      <Card>
        <div className={classes.recent} >
          <p style={{color:'blue'}}> Events </p>
          {
            events.map((act, index)=>{
              return <p style={{fontSize:'11px'}} key={index}> # {act}   </p>
            })
          }
        </div>
      </Card>

      

    </section>
  );
};

export default LeftSide;
