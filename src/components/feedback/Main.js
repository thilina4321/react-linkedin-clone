import Card from "../UI/elements/Card";
import Share from "./Share";
import UserPost from "./UserPost";
const Main = () => {
  return (
    <section style={{marginBottom:'10px'}}>
      <Share />
      <UserPost />
    </section>
  );
};

export default Main;
