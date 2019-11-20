import { db } from "../../fb/config";

export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_ERROR = "GET_DATA_ERROR";
export const GETTING_DATA = "GETTING_DATA";

const getDataSuccess = data => {
  return {
    type: GET_DATA_SUCCESS,
    payload: { data }
  };
};

const getDataError = err => {
  return {
    type: GET_DATA_ERROR,
    payload: { err }
  };
};
const gettingData = () => {
  return {
    type: GETTING_DATA
  };
};

export function setData(senderId, recieverId) {
  //  console.log("check?");
  return dispatch => {
    //  console.log("wubba lubba dub dub");
    dispatch(gettingData());
    let setDataPromise = new Promise((resolve, reject) => {
      //  console.log("tooola tooola");
      var doc_id = `${senderId}` + `${recieverId}`;
      const snapshot = db
        .collection("chatRooms")
        .doc(doc_id)
        .collection("messages")
        .orderBy("createdAt", "desc")
        // .get();
        .onSnapshot(function(querySnapshot) {
          let dataRecieved = querySnapshot.docs.map(doc => doc.data());
          dataRecieved.forEach(doc => {
            doc.createdAt = doc.createdAt.toDate();
            //  data.push({ _id: doc._id,
            //  createdAt: date,
            //  id: doc.id,
            //  text: doc.text,
            //  user: doc.user})
            //  })
          });
          dispatch(getDataSuccess(dataRecieved));
        });
      //    console.log("snapshot is", snapshot);
      resolve(snapshot);
      reject("some error occured");
    });
    setDataPromise
      .then(dataRecieved => {
        console.log("dataRecieved", dataRecieved);
        // dataRecieved = snapshot.docs.map(doc => doc.data());
        //   dataRecieved = snapshot.map(doc => doc.data());
        // dispatch(getDataSuccess(dataRecieved));
      })
      .catch(err => {
        dispatch(getDataError(err));
        console.log("set data err=>", err);
      });
  };
}
