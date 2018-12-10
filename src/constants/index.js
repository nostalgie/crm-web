export const routes = {
  DASHBOARD: "/dashboard",
  LOGIN: "/login",
  TICKETS_OPEN: "/dashboard/open",
  TICKETS_AWAITING: "/dashboard/awaiting",
  TICKETS_CLOSED: "/dashboard/closed"
};

export const roles = {
  SENIOR_ADMIN: "senior_admin",
  DUTY_ADMIN: "duty_admin",
  CUSTOMER: "customer",
  MANAGER: "manager"
};

export const userTypes = {
  CUSTOMER: "customer",
  EMPLOYEE: "employee"
};

export const ticketStates = {
  OPEN: "open",
  AWAITING_REVIEW: "awaiting review",
  CLOSED: "closed",
  FOR_DUTY: "for duty",
  FOR_MANAGER: "for manager",
  FOR_SENIOR: "for senior"
};

export const API_URL = process.env.REACT_APP_API_URL;

export const AUTH_TOKEN = "authToken";
