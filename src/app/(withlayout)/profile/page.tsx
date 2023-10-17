/* eslint-disable @next/next/no-img-element */
'use client'
import Loading from "@/app/loading";
import { auth } from "@/components/Auth/Firebase";
import { setLoading, setUser } from "@/redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import IUser from '@/Types';
import { useGetUsersQuery } from "@/redux/features/userApi";

const UserProfile = () => {
  const {user, isLoading, isError} = useAppSelector(state=> state.user)
  const dispatch = useAppDispatch();
  const {data} = useGetUsersQuery(null)
  const allUsers:IUser[] = data?.data

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  if (!isLoading && !isError && user?.email && allUsers?.length > 0)
    content = allUsers.filter(dbUser => {
  return dbUser.email === user?.email}).map(dbUser => <div key={dbUser._id}>
      <img src={`https://ui-avatars.com/api/?name=${dbUser?.name}&size=128&bold=true`} alt="image of user" className="rounded-lg mb-2"></img>
      <h1 className="text-2xl font-bold">{dbUser?.name}</h1>
      <h1 className="text-2xl font-bold">Email: {dbUser?.email}</h1>
      <h1 className="text-2xl font-bold">Role: {dbUser?.role}</h1>
      </div>)

  // if(dbUser.email === user?.email)
    useEffect(()=> {
      dispatch(setLoading(true))
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUser(user.email));
          dispatch(setLoading(false))
        } else {
          dispatch(setLoading(false))
        }
      });
    },[dispatch])

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Profile section</h1>
      {content}
    </div>
  );
};

export default UserProfile;