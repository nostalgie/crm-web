import { roles } from "../constants";

export const localizeError = error => {
  switch (error) {
    case "is required":
      return "Поле обязательно для заполнения";
    default:
      return error;
  }
};

export const localizeAdminRole = role => {
  switch (role) {
    case roles.DUTY_ADMIN: {
      return "дежурный системный администратор";
    }
    case roles.SENIOR_ADMIN: {
      return "ведущий системный администратор";
    }
    case roles.MANAGER: {
      return "IT-менеджер";
    }
    default: {
      return role;
    }
  }
};
