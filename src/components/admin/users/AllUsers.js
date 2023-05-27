import React,{Fragment,useContext,useEffect} from 'react';
import { deleteUser, getAllUser } from './fetchApi';
import moment from 'moment';
import { UserContext } from './index';

const apiURL = process.env.REACT_APP_API_URL

const AllUser = (props) => {
    const { data,dispatch } = useContext(UserContext)
    const { users,loading } = data
  

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
      dispatch({ type: "loading", payload: true });
      let responseData = await getAllUser();
      setTimeout(() => {
        if (responseData && responseData.Users) {
          dispatch({
            type: "fetchUserAndChangeState",
            payload: responseData.Users,
          });
          dispatch({ type: "loading", payload: false });
        }
      }, 1000);
    };

    
  const deleteUserReq = async (cId) => {
    let deleteC = await deleteUser(cId);
    if (deleteC.error) {
      console.log(deleteC.error);
    } else if (deleteC.success) {
      console.log(deleteC.success);
      fetchData();
    }
  };
    if(loading){
        return (
            <div className="flex items-center justify-center p-8">
              <svg
                className="w-12 h-12 animate-spin text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                ></path>
              </svg>
            </div>
          );

    }
    return(
        <Fragment>
             <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Tên</th>
              <th className="px-4 py-2 border">Ảnh đại diện</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Số Điện thoại</th>
              <th className="px-4 py-2 border">Đơn Hàng</th>
              <th className="px-4 py-2 border">Ngày tạo</th>
              <th className="px-4 py-2 border">Khác</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((item, key) => {
                return (
                  <UserTable
                    user={item}
                    deleteProduct={(oId) => deleteUserReq(oId)}
                    key={key}
                  />
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="10"
                  className="text-xl text-center font-semibold py-8"
                >
                  No product found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-sm text-gray-600 mt-2">
          Total {users && users.length} product found
        </div>
      </div>
        
        </Fragment>

        
    )
    
}

const UserTable = ({ user, deleteUser}) => {
  return (
    <Fragment>
      <tr>
        <td className="p-2 text-left">
          <b>{user.name}</b>
        </td>
        <td className="p-2 text-left">
          {user.userImage}
        </td>
        <td className="p-2 text-left">
          {user.email}
        </td>
        <td className="p-2 text-left">
          {user.phoneNumber}
        </td>
        <td className="p-2 text-center">
          <img
            className="w-12 h-12 object-cover object-center"
            src={`${apiURL}/uploads/users/${user.cImage}`}
            alt=""
          />
        </td>
        {/* <td className="p-2 text-center">
          {user.cStatus === "Active" ? (
            <span className="bg-green-200 rounded-full text-center text-xs px-2 font-semibold">
              {user.cStatus}
            </span>
          ) : (
            <span className="bg-red-200 rounded-full text-center text-xs px-2 font-semibold">
              {user.cStatus}
            </span>
          )}
        </td> */}
        <td className="p-2 text-center">
          {moment(user.createdAt).format("lll")}
        </td>
        <td className="p-2 flex items-center justify-center">
          <span
            onClick={(e) => deleteUser(user._id)}
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
          >
            <svg
              className="w-6 h-6 fill-current text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </td>
      </tr>
    </Fragment>
  );
};
export default AllUser