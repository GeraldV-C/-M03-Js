let chartInstance = null;  

document.getElementById('convert-btn').addEventListener('click', async () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;


    if (isNaN(amount) || amount <= 0) {
        alert("Por favor, ingresa un monto válido.");
        return;
    }

    try {

        const response = await fetch('https://raw.githubusercontent.com/GeraldV-C/mindicador.json/main/mindicador.json');


        if (!response.ok) {
            throw new Error("No se pudo obtener datos del archivo JSON.");
        }


        const data = await response.json();

        console.log('Datos de JSON:', data);


        if (!data[currency]) {
            throw new Error(`No se encontraron datos para la moneda: ${currency}`);
        }


        const exchangeRate = data[currency].valor;


        const convertedAmount = amount / exchangeRate;


        document.getElementById('result').innerHTML = `Resultado: ${amount} CLP = ${convertedAmount.toFixed(2)} ${currency.toUpperCase()}`;


        const history = data[currency].historico || [];
        const dates = history.map(item => item.fecha);
        const values = history.map(item => item.valor);


        if (history.length > 0) {
            showChart(dates, values);
        } else {

            document.getElementById('currency-chart').style.display = 'none'; 
            document.getElementById('result').innerHTML += "<br>No hay datos históricos disponibles.";
        }

    } catch (error) {

        document.getElementById('result').innerHTML = `Error: ${error.message}`;
    }
});


function showChart(dates, values) {
    console.log('Fechas:', dates);
    console.log('Valores:', values);


    if (dates.length === 0 || values.length === 0) {
        document.getElementById('currency-chart').style.display = 'none';
        return;
    }


    if (chartInstance) {
        chartInstance.destroy();
    }


    const ctx = document.getElementById('currency-chart').getContext('2d');

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Valor de la moneda',
                data: values,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Fecha'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Valor (CLP)'
                    },
                    ticks: {
                        beginAtZero: false
                    }
                }
            }
        }
    });
}
