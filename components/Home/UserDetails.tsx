import { handleSignOut } from '@/functions/AUTH/SignOut'
import { ClearUser } from '@/utils/Redux/Slice/User/UserSlice'
// import { RootState } from '@/utils/Redux/Store/Store'
// import { LogOut } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
const UserDetails = () => {
  const Dispatch = useDispatch()
  // const user = useSelector((State: RootState) => State.user)
  const Signout = async () => {
    localStorage.removeItem('UserData')
    const SignoutDone = await handleSignOut()
    if (SignoutDone) Dispatch(ClearUser())
  }
  return (
    <div className=" flex items-center gap-1 flex-col justify-center w-full my-4">
      <div className=" flex items-center gap-2 ">
        <Image
          src={'/360_F_362562495_Gau0POzcwR8JCfQuikVUTqzMFTo78vkF.jpg'}
          width={30}
          height={30}
          alt="User Image"
          className=" rounded-full"
        />
        <h1 className=" text-base text-white">Admin</h1>
      </div>
      {/* <LogOut
        size={18}
        onClick={() => Signout()}
        className=" text-white cursor-pointer hover:text-red-600"
      /> */}
      <button
        onClick={() => Signout()}
        className=" bg-red-600 hover:bg-red-900 w-full text-white px-4 py-2 rounded-lg"
      >
        Signout
      </button>
    </div>
  )
}
export default UserDetails
