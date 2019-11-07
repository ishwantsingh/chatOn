import uuid from "uuid";

// const getInfo = (cal, carb, fat, fiber, mineral, protein) => {
//   return {
//     type: "GET_INFO",
//     payload: {
//       cal,
//       carb,
//       fat,
//       fiber,
//       mineral,
//       protein
//     }
//   };
// };
// export default getInfo;

export default function newMessageAction(text, user) {
  return {
    type: "NEW_MESSAGE",
    payload: {
      _id: uuid(),
      text: text,
      createdAt: new Date(),
      user: user,
      sent: false,
      recieved: false
    }
  };
}
