import { roles } from '..';
export const customersMenu = {
  title: 'Заказчики',
  array: [
    {
      name: 'Чечня',
      path: '#',
      roles: [
        roles.SENIOR_ADMIN,
        roles.SENIOR_ADMIN,
        roles.DUTY_ADMIN,
        roles.CUSTOMER,
        roles.MANAGER,
      ],
    },
    {
      name: 'Круто',
      path: '#',
      roles: [roles.SENIOR_ADMIN, roles.DUTY_ADMIN],
    },
  ],
};
