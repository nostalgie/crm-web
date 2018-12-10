import { roles } from '..';
export const innerTasksMenu = {
  title: '',
  array: [
    {
      name: 'Внутренние заявки',
      path: '#',
      roles: [
        roles.SENIOR_ADMIN,
        roles.SENIOR_ADMIN,
        roles.DUTY_ADMIN,
        roles.MANAGER,
      ],
    },
    {
      name: 'Регламентные работы',
      path: '#',
      roles: [roles.SENIOR_ADMIN, roles.DUTY_ADMIN],
    },
  ],
};
