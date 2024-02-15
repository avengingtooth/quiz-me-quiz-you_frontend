import { qrCode, screen, code } from "../images";
import data from "../data.json"

function Project(){
    let name = window.location.href.split("/");
    name = name[name.length-1];

    let index = data[name]["index"]
    let title = data[name]["title"]
    return(
        <div>
            <h1>{title}</h1>
            <div id="project">
                <img src = {screen(index)} alt="screen"></img>
                <img src = {code(index)} alt="code"></img>
                <div>
                    <img src = {qrCode(index)} alt="qrCode"></img>
                    <p>scan qr code to test app</p>
                </div>
            </div>
        </div>
    )
}

export default Project;