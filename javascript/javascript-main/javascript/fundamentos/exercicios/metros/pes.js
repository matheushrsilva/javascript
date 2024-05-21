const converter = () => {
    const inputPes = document.getElementById('inputPes').value;
    const metros = inputPes * 0.3048;
    document.getElementById('resultado').textContent = `${inputPes} pés equivalem a ${metros.toFixed(2)} metros.`;
  }
  