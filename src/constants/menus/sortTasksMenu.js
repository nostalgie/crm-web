import { roles, routes, ticketStates } from '..'
export const sortTasksMenu = {
  title: 'Журнал заявок',
  array: [
    {
      name: 'В работе',
      state: ticketStates.OPEN,
      roles: [
        roles.SENIOR_ADMIN,
        roles.DUTY_ADMIN,
        roles.CUSTOMER,
        roles.MANAGER
      ]
    },
    {
      name: 'У менеджера',
      state: ticketStates.FOR_MANAGER,
      roles: [roles.SENIOR_ADMIN, roles.DUTY_ADMIN]
    },
    {
      name: 'Нужен выезд',
      state: ticketStates.FOR_DUTY,
      roles: [roles.SENIOR_ADMIN]
    },
    {
      name: 'Старшему админу',
      state: ticketStates.FOR_SENIOR,
      roles: [roles.DUTY_ADMIN]
    },
    {
      name: 'Ожидают подтверждения',
      state: ticketStates.AWAITING_REVIEW,
      roles: [
        roles.SENIOR_ADMIN,
        roles.DUTY_ADMIN,
        roles.CUSTOMER,
        roles.MANAGER
      ]
    },
    {
      name: 'Выполненные',
      state: ticketStates.CLOSED,
      roles: [
        roles.SENIOR_ADMIN,
        roles.DUTY_ADMIN,
        roles.CUSTOMER,
        roles.MANAGER
      ]
    },
    {
      name: 'Внутренние заявки',
      path: '#',
      roles: [roles.SENIOR_ADMIN, roles.DUTY_ADMIN]
    },
    {
      name: 'Регламентые работы',
      path: '#',
      roles: [roles.SENIOR_ADMIN, roles.DUTY_ADMIN]
    }
  ]
}
