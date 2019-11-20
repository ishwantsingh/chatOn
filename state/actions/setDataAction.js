import { db } from "../../fb/config";

// const setData = superFinal => {
//   return {
//     type: "SET_DATA",
//     payload: {
//       superFinal
//     }
//   };
// };
// export default setData;

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
 async const setData = () => dispatch => { 
    dispatch(gettingData());
    await db
          .collection("chatRooms")
          .doc("chatRoom_1")
          .collection("messages")
          .get()
          .then(function(querySnapshot) {
            querySnapshot.map((doc) => {
                dispatch(getDataSuccess(doc.data()));
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());

            });
        }).catch(err => {
            dispatch(getDataError(err));
            console.log("set data err=>", err)
        })
  };
  
  export default setData();