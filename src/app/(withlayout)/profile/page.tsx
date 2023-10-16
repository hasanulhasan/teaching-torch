'use client'
import { useAppSelector } from "@/redux/hooks";

const UserProfile = () => {
  const {user, isLoading} = useAppSelector(state=> state.user)
  console.log(user)
  return (
    <div>
      <h1>This is profile section</h1>
    </div>
  );
};

export default UserProfile;