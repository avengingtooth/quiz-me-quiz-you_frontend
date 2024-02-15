import IHaveADreamQrCode from "./images/IHaveADream/qrcode.png"
import IHaveADreamCode from "./images/IHaveADream/code.png"
import IHaveADreamScreen from "./images/IHaveADream/screen.png"

function qrCode(index){
    if(index === 0) return IHaveADreamQrCode;
    else return ""
}

function code(index){
    if(index === 0) return IHaveADreamCode;
    else return ""
}

function screen(index){
    if(index === 0) return IHaveADreamScreen;
    else return ""
}

export {qrCode, code, screen};