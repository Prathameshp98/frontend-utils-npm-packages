
class Log {

    static error(text: string){
        console.log(`%c${text}`, 'color: red; font-size: 15px;');
    }

    static warning(text: string){
        console.log(`%c${text}`, 'color: yellow; background-color: black; font-size: 15px;');
    }

    static info(text: string){
        console.log(`%c${text}`, 'color: blue; background-color: white; font-size: 15px;');
    }

    static success(text: string){
        console.log(`%c${text}`, 'color: green; font-size: 16px;');
    }

    static custom(
        text: string,
        color: string, 
        backgroundColor: string,
        fontSize: number
    ){
        console.log(`%c${text}`, `color: ${color}; background-color: ${backgroundColor}; font-size: ${fontSize}px;`); 
    }

}

export {
    Log
}