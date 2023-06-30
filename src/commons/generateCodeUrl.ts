
export class Util {
    static generateCodeUrl(){
        let text ='';
        const stringUrl = "ABCDEFGHIJKLMNOPQRSRUVWXYZabcdefghijklmnopqrstuvwxy0123456789";
        for (let i=0; i < 5; i++){
            text += stringUrl.charAt(Math.floor(Math.random() * stringUrl.length))
        }

        return text;
    }
    
}

Util.generateCodeUrl()