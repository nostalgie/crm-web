export const routes = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  TICKET_INFO: '/dashboard/ticket/:id',
  TICKETS: '/dashboard/tickets'
}

export const roles = {
  SENIOR_ADMIN: 'senior_admin',
  DUTY_ADMIN: 'duty_admin',
  CUSTOMER: 'customer',
  MANAGER: 'manager'
}

export const userTypes = {
  CUSTOMER: 'customer',
  EMPLOYEE: 'employee'
}

export const ticketStates = {
  OPEN: 'open',
  AWAITING_REVIEW: 'awaiting_review',
  CLOSED: 'closed',
  FOR_DUTY: `for_${roles.DUTY_ADMIN}`,
  FOR_MANAGER: `for_${roles.MANAGER}`,
  FOR_SENIOR: `for_${roles.SENIOR_ADMIN}`
}

export const API_URL = process.env.REACT_APP_API_URL

export const AUTH_TOKEN = 'authToken'

export const ticketButtons = {
  unfinished: [
    {
      label: 'Оставить комментарий'
    },
    {
      label: 'Выполнить',
      availableTo: [
        roles.DUTY_ADMIN,
        roles.MANAGER,
        roles.SENIOR_ADMIN
      ],
      action: 'complete'
    },
    {
      label: 'Отправить дежурному',
      availableTo: [
        roles.MANAGER,
        roles.SENIOR_ADMIN
      ],
      newExecutor: roles.DUTY_ADMIN
    },
    {
      label: 'Отправить старшему',
      availableTo: [
        roles.MANAGER,
        roles.DUTY_ADMIN
      ],
      newExecutor: roles.SENIOR_ADMIN
    },
    {
      label: 'Отправить менеджеру',
      availableTo: [
        roles.DUTY_ADMIN,
        roles.SENIOR_ADMIN
      ],
      newExecutor: roles.MANAGER
    }
  ],
  unrated: [
    {
      label: 'Оценить',
      availableTo: [
        roles.CUSTOMER
      ],
      action: 'rate'
    }
  ]
}
