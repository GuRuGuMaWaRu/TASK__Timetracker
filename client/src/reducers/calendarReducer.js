const INIT = {
  monthRepresentation: [],
  currentDate: {
    year: "---",
    month: "---"
  },
  minDate: {
    year: "---",
    month: "---"
  },
  displayedDate: {
    year: "---",
    month: "---"
  }
};

export default function(state = INIT, action) {
  switch (action.type) {
    default:
      return state;
  }
}
