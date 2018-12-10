export const routes = {
  DASHBOARD: "/dashboard",
  LOGIN: "/login",
  TICKETS_OPEN: '/dashboard/open',
  TICKETS_AWAITING: '/dashboard/awaiting',
  TICKETS_CLOSED: '/dashboard/closed',
};

export const roles = {
  SENIOR_ADMIN: "senior_admin",
  DUTY_ADMIN: "duty_admin",
  CUSTOMER: "customer",
  MANAGER: "manager"
};

export const ticketStates = {
  OPEN: "open",
  AWAITING_REVIEW: "awaiting review",
  CLOSED: "closed"
};

export const API_URL = process.env.REACT_APP_API_URL;

export const AUTH_TOKEN = "authToken";
