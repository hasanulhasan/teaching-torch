'use client'
import Loading from "@/app/loading";
import { message } from "antd";
import IUser from '@/Types';
import { useDeleteUserMutation, useEditUserMutation, useGetUsersQuery } from "@/redux/features/userApi";

const ManageUsers = () => {
  const {data, isLoading, isError} = useGetUsersQuery(null);
  const [deleteUser] = useDeleteUserMutation();
  const [editUser] = useEditUserMutation();
  const users:IUser[] = data?.data

  const handleDeleteUser = async (id: string) => {
      try {
        await deleteUser(id).then(()=> {
          message.success('User Deleted')
        })
      } catch (error) {
        console.log(error)
        message.error('There is an error')
      }
  }

  const handleRoleChange = async (id: string, data: string) => {
    console.log(id, data)
    try {
      await editUser({id: id, data: {role: data}}).then(()=> {
        message.success('Role Changed')
      })
    } catch (error) {
      console.log(error)
      message.error('There is an error')
    }
  }

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  if (!isLoading && !isError && users?.length === 0) content = <p className='text-lg text-destructive'>There is no Order</p>;
  if (!isLoading && !isError && users?.length > 0) { content = users
    .map(user => <tr key={user._id} className="text-xs bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
    <td className="px-6 py-5 font-medium">{user.name}</td>
    <td className="px-6 py-5 font-medium ">{user.email}</td>
    <td className="px-6 py-5 font-medium ">{user.role}</td>
    <td className="px-6 py-5 ">
        <button onClick={()=> handleDeleteUser(user._id!)}
            className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-danger-100 hover:bg-danger-500">Delete
        </button>
    </td>
    <td className="px-6 py-5 ">
        <select value={user.role}
        onChange={e => handleRoleChange(user._id!, e.target.value)}
            className="px-4 py-2 font-medium text-gray-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700"
            name="field-name">
            <option>admin </option>
            <option>user</option>
        </select>
    </td>
</tr>)}

  return (
    <div>
      <section className="items-center lg:flex bg-gray-50 font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="pt-4 bg-white rounded shadow dark:bg-gray-900">
                <div className="flex px-6 pb-4 border-b dark:border-gray-700">
                    <h2 className="text-xl font-bold dark:text-gray-400">All Users</h2>
                </div>
                <div className="p-4 overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="text-xs text-left text-gray-500 dark:text-gray-400">
                                <th className="px-6 pb-3 font-medium">Name</th>
                                <th className="px-6 pb-3 font-medium ">Email</th>
                                <th className="px-6 pb-3 font-medium">Role</th>
                                <th className="px-6 pb-3 font-medium">Delete User</th>
                                <th className="px-6 pb-3 font-medium">Change Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              content
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default ManageUsers;