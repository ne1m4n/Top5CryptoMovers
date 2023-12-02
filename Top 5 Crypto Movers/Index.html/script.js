document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(response => response.json())
        .then(data => {
            const sortedData = data.sort((a, b) => Math.abs(b.price_change_percentage_24h) - Math.abs(a.price_change_percentage_24h)).slice(0, 5);
            const ctx = document.getElementById('cryptoChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: sortedData.map(coin => coin.name),
                    datasets: [{
                        label: '24h Price Change (%)',
                        data: sortedData.map(coin => coin.price_change_percentage_24h),
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
