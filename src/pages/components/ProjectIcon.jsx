import { NavLink } from "react-router-dom";
import { qrCode } from "../../images.js";

function ProjectIcon({project}){
    let title =  project["title"]
    let url =  project["url"]
    let index =  project["index"]
    return(
        <NavLink to={"/project/" + url}>
        <div 
            className="projectIcon" 
            style={{ backgroundImage: `url(${qrCode(index)})`}}
        >
            <h1>{title}</h1>
        </div>
        </NavLink>
    )
}

export default ProjectIcon;