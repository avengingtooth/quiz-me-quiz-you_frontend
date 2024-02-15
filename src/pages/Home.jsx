import ProjectIcon from "./components/ProjectIcon";
import data from '../data.json';

function Home(){
    return(
        <div id="home">
            <h1>Mobile App Programming Projects</h1>
            <p>click or scan QR code to view</p>
            <div id="homeGrid">
                {
                    data["projects"].map((cur) => {
                        let project = data[cur]
                        console.log(project);
                        return(
                            <ProjectIcon key = {project["title"]} project = {project}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;