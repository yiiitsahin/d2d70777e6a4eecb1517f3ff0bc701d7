const payment = {
  namespaced: true,

  state: {
    card: {
      card_number: "",
      card_date_year: "",
      card_date_month: "",
      card_cvv: "",
      card_name: "",
    },
    cardFormattedNo: null,
  },

  getters: {
    cardInfo(state) {
      return { ...state.card };
    },
    cardFormattedNo(state) {
      return state.cardFormattedNo;
    },
    isCardValid(state) {
      const isCardNumberValid =
        (state.card.card_number && state.card.card_number.length === 16) ||
        false;
      const isCardNameValid = !!state.card.card_name;
      const isCvvValid =
        (state.card.card_cvv && state.card.card_cvv.length === 3) || false;
      const isDateValid =
        !!state.card.card_date_year && !!state.card.card_date_month;
      return isCardNumberValid && isCardNameValid && isCvvValid && isDateValid;
    },
  },

  mutations: {
    clearCardFields(state) {
      state.cardFormattedNo = null;
      state.card = {
        card_number: "",
        card_date_year: "",
        card_date_month: "",
        card_cvv: "",
        card_name: "",
      };
    },
    setCardNumber(state, value) {
      state.cardFormattedNo = value;
      state.card.card_number = value.replace(/ /g, "");
    },
    setCardName(state, value) {
      state.card.card_name = value;
    },
    setCardDateYear(state, value) {
      state.card.card_date_year = value;
    },
    setCardDateMonth(state, value) {
      state.card.card_date_month = value;
    },
    setCardCvv(state, value) {
      state.card.card_cvv = value;
    },
  },
};

export default payment;
