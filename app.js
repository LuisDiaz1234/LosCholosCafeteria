document.addEventListener('DOMContentLoaded', () => {
  const precios = {
    base: {
      chocolate: 0.35,
      vainilla: 0.40,
      canela: 0.35,
    },
    cobertura: {
      'chocolate-blanco': 0.15,
      'chocolate-negro': 0.10,
      colores: 0.05,
    },
    topping: {
      'chispas-chocolate': 0.05,
      'leche-polvo': 0.05,
      'chispas-colores': 0.05,
      rocklets: 0.10,
      oreo: 0.20,
    },
  };

  window.calcularPrecio = function() {
    const base = document.getElementById('base').value;
    const cobertura = document.getElementById('cobertura').value;
    const topping = document.getElementById('topping').value;
    const cantidad = document.getElementById('cantidad').value;

    const precioBase = precios.base[base];
    const precioCobertura = precios.cobertura[cobertura];
    const precioTopping = precios.topping[topping];

    const precioTotal = (precioBase + precioCobertura + precioTopping) * cantidad;

    const resultado = document.getElementById('resultado');
    resultado.textContent = `El precio total es: $${precioTotal.toFixed(2)}`;
  }
});
