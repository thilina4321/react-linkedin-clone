import Header from "./Header"
import LeftSide from "./LeftSide"
import Main from "./Main"
import RightLide from "./RightLide"

const Feedback = () => {
    return (
        <div style={{ width:'98%' , margin:'10px auto'}}>
            <Header />
            <LeftSide />
            <Main />
            <RightLide />
        </div>
    )
}

export default Feedback
