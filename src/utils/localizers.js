export const localizeError = error => {
  switch (error) {
    case 'is required':
      return `Поле обязательно для заполнения`;
    default:
      return error;
  }
};
