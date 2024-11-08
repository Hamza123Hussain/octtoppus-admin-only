import { useState, useEffect } from 'react'
import { Allusers } from '@/functions/AUTH/Allusers'
import { RootState } from '@/utils/Redux/Store/Store'
import { UserFetched } from '@/utils/SignUpInterface'
import { useSelector } from 'react-redux'

const UserAssign = ({
  value,
  handleChange,
}: {
  value: string | string[] // It can be a single or multiple users
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void
}) => {
  const User = useSelector((state: RootState) => state.user)
  const [UserFetched, SetUserFetched] = useState<UserFetched[]>([])
  const [selectedUsers, setSelectedUsers] = useState<string[]>(
    Array.isArray(value) ? value : [value]
  ) // To manage selected users as an array

  const GetUsers = async () => {
    const Data = await Allusers(User.Email)
    if (Data) {
      SetUserFetched(Data)
    }
  }

  useEffect(() => {
    GetUsers()
  }, [])

  const toggleUserSelection = (userName: string) => {
    setSelectedUsers((prevSelectedUsers) => {
      if (prevSelectedUsers.includes(userName)) {
        return prevSelectedUsers.filter((user) => user !== userName)
      } else {
        return [...prevSelectedUsers, userName]
      }
    })
  }

  useEffect(() => {
    // Cast to `unknown` first, and then cast it to the correct event type
    handleChange({
      target: { name: 'assignedTo', value: selectedUsers },
    } as unknown as React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)
  }, [selectedUsers, handleChange])

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2 text-purple-400">
        Assigned To
      </label>
      <div className="flex flex-wrap gap-2">
        {UserFetched.map((element) => (
          <div
            key={element.Email}
            className={`cursor-pointer px-4 py-2 rounded-full text-sm ${
              selectedUsers.includes(element.Name)
                ? 'bg-purple-500 text-white'
                : 'bg-white border border-purple-500 text-purple-500'
            }`}
            onClick={() => toggleUserSelection(element.Name)}
          >
            {element.Name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserAssign
