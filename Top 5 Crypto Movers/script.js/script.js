
document.getElementById('convertButton').addEventListener('click', convertCurreny);

populateDropdowns(""); {
    fetch('https://api.coingecko.com/api/v3/coins/list')
    .then(response=json())
    .then(data => {
        const sourceCurrencyDropdown = document.getElementById('amount').value;
        const sourceCurrency = document.getElementById('sourceCurrency').value;
        const targetCurrency = document.getElementById('targetCurrency').value;
    }
        )

}