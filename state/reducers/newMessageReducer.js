import dummyMessages from "../dummyData";

// const initialState = dummyMessages;

export default function messageReducer(state = dummyMessages, action) {
  switch (action.type) {
    case "NEW_MESSAGE":
      return state.concat(action.payload);
    // return {
    //   ...state,
    //   text: action.payload.text,
    //   createdAt: new Date(),
    //   user: action.payload.user,
    //   fat: action.payload.fat,
    //   fiber: action.payload.fiber,
    //   mineral: action.payload.mineral,
    //   protein: action.payload.protein
    // };
    default:
      return state;
  }
}
