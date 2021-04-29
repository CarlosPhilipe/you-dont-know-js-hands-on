const TAX = 0.08; // 8% of tax
const CELLPHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
let spendingLimit = 0;
let bankBalance = 0;

function main() {
  // Values of limit and balance informed user
  bankBalance = prompt('Informe o saldo de sua conta bancária');
  spendingLimit = prompt('Informe seu limite de gastos');

  //
  let totalPurchase = 0;

  function priceFormatter(newAmt) {
    return '$' + newAmt.toFixed(2);;
  }

  function addTax(amt) {
    return  amt + (amt * TAX);
  };

  function addCellphoneToPurchase() {
    return totalPurchase + CELLPHONE_PRICE;
  };

  function addAccessoryToPurchase() {
    return totalPurchase + ACCESSORY_PRICE;
  };


  while (totalPurchase < bankBalance) {
    totalPurchase = addCellphoneToPurchase();
    if ( totalPurchase < spendingLimit) 
      totalPurchase = addAccessoryToPurchase();
  };

  totalPurchase = addTax(totalPurchase);
  let finalPurchaseValue = priceFormatter(totalPurchase);
  
  console.log(`A compra deu ${finalPurchaseValue} vai levar?\n`);
  if (totalPurchase <= bankBalance) {
    console.log('Eu vou levar');
  } else {
    console.log('Putz, tá caro né, vou deixar pra próxima');
  }
}

main();
