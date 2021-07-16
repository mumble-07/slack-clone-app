import "./ChatScreenDropDown.css";
import { TiPin } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../api/user-context";
import user1 from "../../assets/user1.png";




const ChatScreenDropDown = () => {
  const {chatScreenData} = useContext(UserContext);
  const {rawUserList} = useContext(UserContext);
  const {type, receivers} = chatScreenData;
  const [remainingUsers, setRemainingUsers] = useState(rawUserList);
  const [show,setShow]=useState(true)

  const setCurrentReceiver = (e) => {
    //set receivers in UserContext
    receivers.push({
      id: e.target.id,
      name: e.target.getAttribute("name"),
      type: e.target.type
    })

    setRemainingUsers(prevValue => {
      const filteredValue = [];
      filteredValue[0] = prevValue[0].filter(el => { return el.id.toString() !== e.target.id })
      return filteredValue;
    })
   
    console.log(receivers)
  }

 
  const removeReceiver = (e) => {
    console.log(e.target)
    const indexOfReceiver = receivers.map(receiver => {return receiver.id }).indexOf(e.target.id);
    receivers.splice(indexOfReceiver, 1);
    const removedReceiver = rawUserList[0].find(user => {
      return user.id.toString() === e.target.id;
    });

    setRemainingUsers(prevValue => {
      prevValue[0].unshift(removedReceiver);
      return prevValue;
    })

    console.log(receivers)
    console.log(removedReceiver)

  }


  return (
    <div className="drop-down-header">
      {type === "new" ?
      <>
        <h3 className="to__newUser">To:</h3>
        <div className="selected-receivers">
          {receivers?.map(receiver => {
            return <div key={receiver.id} id={receiver.id}><img src={user1}/><h5>{receiver.name}</h5><button className="remove-button"id={receiver.id} onClick={removeReceiver} >&times;</button></div>
          })}
        </div>
        {show ? <ul className="receiver-list">
          {remainingUsers[0]?.map((rawUser, index) => {
             const userName = rawUser.name !== null ? rawUser.name : rawUser.email
              return <li key={index} id={rawUser.id} name={userName} type="User" onClick={setCurrentReceiver}><img src={user1} />{userName}</li>
            })
          }
            </ul> : null}
        <div className="show-hide-container">
          <button className="show-hide-list" onClick ={()=>setShow(true)}>+</button>
          <button className="show-hide-list" onClick ={()=>setShow(false)}>x</button>
        </div>
      </> :
      <>
        <div className="pin-items">
          <TiPin className="pin-icon" />
          <h3>Pinned</h3>
        </div>
        <div className="add-book-mark">
          <TiPlus className="add-book-mark-plus" />
          <h3>Add a bookmark</h3>
        </div>
      </>
    }
    </div>
  );
};

export default ChatScreenDropDown;
