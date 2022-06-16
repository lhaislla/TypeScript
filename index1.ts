import { isCallOrNewExpression } from "typescript";

console.log("TypeScript");
function soma(a: number, b:number){
    return a+b;
}
soma(2,3)

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
   domestico: boolean;
}
interface ICanino extends IAnimal{
    porte: 'pequeno'| 'medio' | 'grande';
}
interface IFelino extends IAnimal{
    visãoNoturna: boolean;

}
type IDomestico = IFelino | ICanino;
const animal: IDomestico ={
   domestico: true,
   nome: 'gato',
   tipo:"terrestre",
   porte: "pequeno",
   visãoNoturna: true,
    
}


/*const felino: IFelinos = {
    nome:'Leão',
    tipo: "terrestre",
    visãoNoturna: true,
    
}*/
