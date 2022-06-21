let valoram = 1.054166666666667;
let meses = 12;
let dinheiro = 1500;
let valorjuros = (dinheiro + (valoram * (dinheiro / 100)));
let valorTotal = 0;
let redimento = 0;

for (let contador = 1; contador <= meses;contador++){
  let total = 0;
  let redimentoaomes = 0;
  valorTotal += ((valorjuros + (valoram *(valorTotal /100)))-dinheiro);
  total = dinheiro+valorTotal;
  redimentoaomes += (total-dinheiro);
  console.log(`Valor total da renda em ${contador} mês: R$${redimentoaomes.toFixed(2)}.
  Valor total no mês: ${total.toFixed(2)}`);
  if(contador == meses){
    console.log(`Você Investiu R$${dinheiro}.
    Tendo um rendimento  de R$${redimentoaomes.toFixed(2)}, no período de ${meses} meses
    Totalizando na sua conta R$${total.toFixed(2)}`);
  }
};