import { faHouse, faUser, faRoute, faMoneyCheckDollar, faCalendar } from '@fortawesome/free-solid-svg-icons';

export const menuItems = [
  { to: '/', icon: faHouse, label: 'Home' },
  { to: '/clientes', icon: faUser, label: 'Clientes' },
  { to: '/rutas', icon: faRoute, label: 'Rutas' },
  { to: '/facturacion', icon: faMoneyCheckDollar, label: 'Facturación' },
  { to: '/calendario', icon: faCalendar, label: 'Calendario' }
];
