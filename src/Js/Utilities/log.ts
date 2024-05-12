
import colors from '../../Data/colorcodes';
import { fonts } from '../../Data/font';

class Log {

    static danger(text: string): void{
        console.log(`%c${text}`, `color: ${colors.danger}; font-size: ${fonts.paragraph}px;`);
        return;
    }

    static warning(text: string): void{
        console.log(`%c${text}`, `color: ${colors.warning}; background-color: ${colors.dark}; font-size: ${fonts.paragraph}px;`);
        return;
    }

    static info(text: string){
        console.log(`%c${text}`, `color: ${colors.info}; background-color: ${colors.light}; font-size: ${fonts.paragraph}px;`);
    }

    static success(text: string){
        console.log(`%c${text}`, `color: ${colors.success}; font-size: ${fonts.paragraph}px;`);
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

export default Log;