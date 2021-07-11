import "./ChatScreenDropDown.css";
import { TiPin } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import { useContext, useState } from "react";
import UserContext from "../../api/user-context";
import { props } from "bluebird";
import user1 from "../../assets/user1.png";
import CloseIcon from '@material-ui/icons/Close';

const ChatScreenDropDown = () => {
  const {chatScreenData} = useContext(UserContext);
  const {rawUserList} = useContext(UserContext);
  const {type, receivers} = chatScreenData;
  // const [remainingUsers, setRemainingUsers] = useState(rawUserList[0]);

  const setCurrentReceiver = (e) => {
    receivers.push([e.target.id, e.target.getAttribute("name")]);

    console.log(receivers)
    console.log(e.target)
  }

  // useEffect((e) => {
  //   const indexOfSelected = remainingUsers.map(user => {return user.id}).indexOf(e.target.id)
  //   setRemainingUsers(prevValue => {
  //     return [...prevValue.slice(0, indexOfSelected), ...prevValue.slice(indexOfSelected + 1)]
  //   })
  // }, receivers)

  return (
    <div className="drop-down-header">
      {type === "new" ?
      <>
        <h3 className="to__newUser">To:</h3>
        <div className="selected-receivers">
          {receivers.map(receiver => {
            return <div><img src={user1}/><h5>{receiver[1]}</h5><CloseIcon /></div>
          })}
        </div>
        <ul className="receiver-list">
          {rawUserList[0].map((rawUser, index) => {
             const userName = rawUser.name? rawUser.name : rawUser.email
              return <li key={index} id={rawUser.id} name={userName} onClick={setCurrentReceiver}><img src={user1} />{userName}</li>
            })
          }
        </ul>
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
