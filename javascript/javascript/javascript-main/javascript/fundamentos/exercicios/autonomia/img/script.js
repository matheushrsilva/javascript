document.getElementById('autonomy-form').addEventListener('submit', function(event) {
    event.preventDefault();
 
    const fuel = parseFloat(document.getElementById('fuel').value);
    const consumption = parseFloat(document.getElementById('consumption').value);
 
    if (isNaN(fuel) || isNaN(consumption) || fuel <= 0 || consumption <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }
 
    const autonomy = fuel * consumption;
    document.getElementById('result').textContent = `A autonomia do carro é de ${autonomy.toFixed(2)} km.`;
});
 
document.getElementById('clear-fields').addEventListener('click', function() {
    document.getElementById('autonomy-form').reset();
});
 
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('autonomy-form').reset();
    document.getElementById('result').textContent = '';
});
 