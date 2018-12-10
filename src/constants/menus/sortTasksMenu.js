import { roles, routes } from '..';
export const sortTasksMenu = {
  title: 'Журнал заявок',
  array: [
    {
      name: 'В работе',
      path: routes.TICKETS_OPEN,
      roles: [
        roles.SENIOR_ADMIN,
        roles.DUTY_ADMIN,
        roles.CUSTOMER,
        roles.MANAGER,
      ],
    },
    {
      name: 'У менеджера',
      path: '#',
      roles: [roles.SENIOR_ADMIN, roles.DUTY_ADMIN],
    },
    {
      name: 'Нужен выезд',
      path: '#',
      roles: [roles.SENIOR_ADMIN],
    },
    {
      name: 'Старшему админу',
      path: '#',
      roles: [roles.DUTY_ADMIN],
    },
    {
      name: 'Ожидают подтверждения',
      path: routes.TICKETS_AWAITING,
      roles: [
        roles.SENIOR_ADMIN,
        roles.DUTY_ADMIN,
        roles.CUSTOMER,
        roles.MANAGER,
      ],
    },
    {
      name: 'Выполненные',
      path: routes.TICKETS_CLOSED,
      roles: [
        roles.SENIOR_ADMIN,
        roles.DUTY_ADMIN,
        roles.CUSTOMER,
        roles.MANAGER,
      ],
    },
    {
      name: 'Внутренние заявки',
      path: '#',
      roles: [roles.SENIOR_ADMIN, roles.DUTY_ADMIN, roles.CUSTOMER],
    },
    {
      name: 'Регламентые работы',
      path: '#',
      roles: [roles.SENIOR_ADMIN, roles.DUTY_ADMIN, roles.CUSTOMER],
    },
  ],
};
