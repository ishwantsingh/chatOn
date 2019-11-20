//import dummyMessages from "../dummyData";
import {
  NEW_MES_SENT,
  NEW_MES_ERR,
  SENDING_NEW_MES
} from "../actions/newMessageAction";

let dummyMessages = [];

const initialState = {
  docId: "",
  sendErr: null,
  sendingMessage: false
};

export default function messageReducer(state = dummyMessages, action) {
  switch (action.type) {
    case "NEW_MESSAGE":
      return [action.payload, ...state];
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

export function sendMessageReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_MES_SENT:
      return { ...state, docId: action.payload.docId, sendingMessage: false };
    case NEW_MES_ERR:
      return { ...state, sendErr: action.payload, sendingMessage: false };
    case SENDING_NEW_MES:
      return { ...state, sendingMessage: true };
    default:
      return state;
  }
}
