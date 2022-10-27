import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";

const About = () => {
    const { id } = useParams();


    return (
        <div className=" contenaire">
            <div>
                <Navbar> </Navbar>
            </div>
            <br></br>
            <br></br>
            <div className="app">
                <Search></Search>
            </div>

        </div>
    )
}

export default About;