let amount = 10;
let currency = "EUR";

const CurrencyRates = {
    EUR: 1,
    USD: 1.1355,
    GBP: 0.85718,
    JPY: 178.41,
    CNY: 7.6117,
    AUD: 1.6211,
    CAD: 1.6101,
    CHF: 0.9461

};

function convertCurrency(amount, sourceCurrency, targetCurrency) {
 const source = sourceCurrency.toUpperCase();
 const target = targetCurrency.toUpperCase();
   
 let convertedAmount= amount * (CurrencyRates[target] / CurrencyRates[source]);

  return convertedAmount;
}
console.log(convertCurrency(amount, currency, "USD") + " USD");
 


