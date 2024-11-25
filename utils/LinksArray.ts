import {
  House,
  ClipboardList,
  Users,
  PieChart,
  Rows3,
  BookOpen,
} from 'lucide-react'
import { BiSolidReport } from 'react-icons/bi'
export const getSidebarLinks = (userEmail: string) => {
  return [
    {
      href: '/',
      label: 'Home',
      icon: House,
    },
    {
      href: '/createtask',
      label: 'Create Task',
      icon: ClipboardList,
    },
    {
      href: '/AllAttendance',
      label: 'Total Attendance',
      icon: PieChart,
      restricted: userEmail === 'octtoppus1@gmail.com', // Only show if the user is the admin
    },
    {
      href: '/All_Tasks',
      label: 'All Task Details',
      icon: Rows3,
      restricted: userEmail === 'octtoppus1@gmail.com', // Only show if the user is the admin
    },
    {
      href: '/users',
      label: 'All Users',
      icon: Users,
      restricted: userEmail === 'octtoppus1@gmail.com', // Only show if the user is the admin
    },
    {
      href: '/report',
      label: 'Report',
      icon: BiSolidReport,
      restricted: userEmail === 'octtoppus1@gmail.com', // Only show if the user is the admin
    },
    {
      href: '/Guide',
      label: 'Report Guide',
      icon: BookOpen,
      restricted: userEmail === 'octtoppus1@gmail.com', // Ensure only restricted if needed
    },
  ]
}
