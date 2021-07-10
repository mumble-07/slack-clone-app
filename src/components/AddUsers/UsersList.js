// import {useState, useContext, useEffect} from 'react';
// import  {} from '@material-ui/core'
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import UserContext from '../../api/user-context.js';


// const UsersList = () => {
//     const {rawUserList, userListHeaders} = useContext(UserContext);
//     const [users, setUsers] = useState([]);

//     useEffect( () => {
//         axios.get('http://206.189.91.54//api/v1/users', {headers: userListHeaders})
//         .then(res => {
//             const {data} = res.data;
//             setUsers(data)
//         })
//         .catch(error => console.error('Error fetching data from API'))
//      }
//         , []
//     )
    
//     return(
//         <>
//             {users.map(
//                 user => 
//                     {return(
//                         <div>
//                             <div>{user.uid}</div> 
//                             <div>{user.name}</div>
//                         </div>
//                     )}
                    
//             )}
//         </>
//     )

// }

// export default UsersList;