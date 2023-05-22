prompt = require("prompt-sync")();

var a = Number(prompt("Digite a idade a: "));
var b = Number(prompt("Digite a idade b: "));
var c = Number(prompt("Digite a idade c: "));

var idadeCamila = 0;

try{
    if (a <= b && a <= c && b >= c) {
        idadeCamila = c;
        console.log("A idade da Camila é: " + idadeCamila);
    }
    
    else if(a <= b && a <= c && b <= c) {
        idadeCamila = b;
        console.log("A idade da Camila é: " + idadeCamila);
    }
    
    else if(a >= b && a <= c && b >= c) {
        idadeCamila = c;
        console.log("A idade da Camila é: " + idadeCamila);
    }
    else if(a >= b && a >= c && b >= c) {
        idadeCamila = b;
        console.log("A idade da Camila é: " + idadeCamila);
    }
    else if(a >= b && a >= c && b <= c) {
        idadeCamila = c;
        console.log("A idade da Camila é: " + idadeCamila);
    }
    else if(a <= b && a >= c && b >= c) {
        idadeCamila = a;
        console.log("A idade da Camila é: " + idadeCamila);
    }
    else if(a >= b && a <= c && b <= c) {
        idadeCamila = a;
        console.log("A idade da Camila é: " + idadeCamila);
    }

}

catch (erro) {
    console.log("Ocorreu um erro: " + e.message);
}
