const periods = {
  DAY: {
    value: "за сегодня",
    request: "day"
  },
  WEEK: {
    value: "за неделю",
    request: "week"
  },
  MONTH: {
    value: "за месяц",
    request: "month"
  },
  CUSTOM: {
    value: "за период",
    request: "custom"
  }
};

const types = {
  ALL: "Все",
  CUSTOMER: "По заказчику"
};

export { periods, types };
