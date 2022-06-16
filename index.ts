//Generic types

function adicionaApendiceALista<T>(array: T[], valor: T){
return array.map(() => valor);
}
adicionaApendiceALista([1,2,3,4,5,6,7],7);