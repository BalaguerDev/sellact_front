export const getGreetingTime = () => {
  const currentHour = new Date().getHours();
  let greeting = '';

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Buenos días';
  } else if (currentHour >= 12 && currentHour < 19) {
    greeting = 'Buenas tardes';
  } else {
    greeting = 'Buenas noches';
  }

  return greeting;
};

export const getCurrentMonth = () => {
  const currentMonthIndex = new Date().getMonth();
  const monthNames = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];
  return monthNames[currentMonthIndex];
};

export const calculateGrowthPercentage = (ventas, objetivo) => {
  if (objetivo === 0) return '0% este mes';
  return ((ventas - objetivo) / objetivo * 100).toFixed(2) + '%';
};

export const formatCurrency = (amount) => {
  return amount.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
};