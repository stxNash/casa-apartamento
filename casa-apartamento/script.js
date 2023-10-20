document.addEventListener('DOMContentLoaded', function() {
    const radioCasa = document.getElementById('radio-casa');
    const radioAp = document.getElementById('radio-ap');
    const andarInput = document.getElementById('andar');
    
    andarInput.style.display = 'none';
    
    function updateAndarInput() {
      andarInput.style.display = radioAp.checked ? 'block' : 'none';
    }
  
    radioAp.addEventListener('change', updateAndarInput);
    radioCasa.addEventListener('change', updateAndarInput);
  });
  
  function calculador() {
    const casa = document.getElementById('radio-casa').checked;
    const ap = document.getElementById('radio-ap').checked;
    const quartos = parseFloat(document.getElementById('quartos').value);
    const metragem = parseFloat(document.getElementById('metragem').value);
    const preco_metro = parseFloat(document.getElementById('preco').value);
    let andar = parseFloat(document.getElementById('andar').value);
  
    if (ap && andar === 0) {
      andar = 2;
    }
  
    let preco = 0;
    
    switch (quartos) {
      case 1:
        preco = metragem * (casa ? preco_metro : preco_metro * 1.0 * (andar / 1.2));
        break;
      case 2:
        preco = metragem * (casa ? preco_metro * 1.2 : preco_metro * 1.2 * (andar / 1.2));
        break;
      case 3:
        preco = metragem * (casa ? preco_metro * 1.5 : preco_metro * 1.5 * (andar / 1.2));
        break;
      case 4:
        preco = metragem * (casa ? preco_metro * 2.0 : preco_metro * 2.0 * (andar / 1.2));
        break;
      default:
        alert('Não está disponível ' + quartos + ' quartos, somente até 4!');
    }
    
    resultado.innerHTML = 'Preço final é ' + preco.toFixed(2);
  }
  

  
  
  