import { RootState } from '@/utils/Redux/Store/Store'
import { ClipboardList, House, Users, PieChart, Rows3 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'

const SideBarLinks = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const User = useSelector((state: RootState) => state.user)
  const pathname = usePathname()

  // Function to determine if a link is active
  const isActive = (path: string) => pathname === path

  return (
    <>
      <Link
        href="/"
        onClick={closeSidebar}
        className={`gap-3 w-full flex items-center ${
          isActive('/')
            ? 'bg-white text-[#5925da] rounded-lg px-2'
            : 'text-white'
        } hover:bg-white hover:text-[#5925da] hover:rounded-lg hover:px-2`}
      >
        <House size={18} />
        <h5>Home</h5>
      </Link>

      <Link
        href="/createTask"
        onClick={closeSidebar}
        className={`gap-3 w-full flex items-center ${
          isActive('/createTask')
            ? 'bg-white text-[#5925da] rounded-lg px-2'
            : 'text-white'
        } hover:bg-white hover:text-[#5925da] hover:rounded-lg hover:px-2`}
      >
        <ClipboardList size={18} />
        <h5>Create Task</h5>
      </Link>

      {User.Email === 'octtoppus1@gmail.com' && (
        <>
          <Link
            href="/AllAttendance"
            onClick={closeSidebar}
            className={`gap-3 w-full flex items-center ${
              isActive('/AllAttendance')
                ? 'bg-white text-[#5925da] rounded-lg px-2'
                : 'text-white'
            } hover:bg-white hover:text-[#5925da] hover:rounded-lg hover:px-2`}
          >
            <PieChart size={18} />
            <h5>Total Attendance</h5>
          </Link>

          <Link
            href="/All_Tasks"
            onClick={closeSidebar}
            className={`gap-3 w-full flex items-center ${
              isActive('/All_Tasks')
                ? 'bg-white text-[#5925da] rounded-lg px-2'
                : 'text-white'
            } hover:bg-white hover:text-[#5925da] hover:rounded-lg hover:px-2`}
          >
            <Rows3 size={18} />
            <h5>All Task Details</h5>
          </Link>

          <Link
            href="/users"
            onClick={closeSidebar}
            className={`gap-3 w-full flex items-center ${
              isActive('/users')
                ? 'bg-white text-[#5925da] rounded-lg px-2'
                : 'text-white'
            } hover:bg-white hover:text-[#5925da] hover:rounded-lg hover:px-2`}
          >
            <Users size={18} />
            <h5>All Users</h5>
          </Link>
        </>
      )}
    </>
  )
}

export default SideBarLinks
