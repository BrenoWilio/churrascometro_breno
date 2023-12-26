

// Regras de negócio
// carne - 400g por pessoa + de 6 horas - 650
// cerveja - 1200ml por pessoa + de 6 horas - 2000ml
// refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5


let botao = document.getElementById("bot");

botao.addEventListener("click", () => {

    let adulto = document.getElementById("adultos").value;
    let criancas = document.getElementById("criancas").value;
    let duracao = document.getElementById("duracao").value;

    let carne = ""
    let cerveja = ""
    let refriAgua = ""

    if(adulto < 0 || criancas < 0 || duracao <0){
        alert("Os valores não podem ser negativos!")  
    }else{
        if(duracao <= 6){
            carne = (adulto * 400) + (criancas * 200);
            cerveja = (adulto * 1200);
            refriAgua = (adulto * 1000) + (criancas * 500);
        }else{
            carne = (adulto * 650) + (criancas * 325);
            cerveja = (adulto * 2000);
            refriAgua = (adulto * 1500) + (criancas * 750);
        }

        document.getElementById("bloco").style.height = "500px";

        document.getElementById("carne").innerText = "O consumo de carne será de " + carne + "g";
        document.getElementById("cerveja").innerText = "O consumo de cerveja será de " + cerveja + "ml";
        document.getElementById("refri").innerText = "O consumo de refrigerante/água será de " + refriAgua + "ml";
    }})