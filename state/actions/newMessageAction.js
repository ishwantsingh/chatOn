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

export function newMessage(id, text, userId, userName) {
  return {
    type: "NEW_MESSAGE",
    payload: {
      _id: id,
      text: text,
      createdAt: new Date(),
      user: {
        _id: userId,
        name: userName
      },
      sent: false,
      recieved: false
    }
  };
}
