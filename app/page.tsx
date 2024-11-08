'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaTasks, FaUserCheck, FaUsers, FaPlus } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 p-6">
      {/* Logo */}
      <Image
        src="https://ibb.co/1sSYhcL"
        alt="Logo"
        width={180}
        height={180}
        className="mb-8"
      />

      {/* Welcome Message */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Welcome to the Admin Panel
      </h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-xl">
        Manage your tasks, track attendance, and oversee users with ease. Use
        the options below to get started.
      </p>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
        {/* Create Task Button */}
        <Link href="/createtask">
          <button className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <FaPlus className="text-3xl mb-2" />
            Create Task
          </button>
        </Link>

        {/* View Attendance Button */}
        <Link href="/AllAttendance">
          <button className="flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <FaUserCheck className="text-3xl mb-2" />
            View Attendance
          </button>
        </Link>

        {/* View Users Button */}
        <Link href="/users">
          <button className="flex flex-col items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <FaUsers className="text-3xl mb-2" />
            View Users
          </button>
        </Link>

        {/* View Tasks Button */}
        <Link href="/All_Tasks">
          <button className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <FaTasks className="text-3xl mb-2" />
            View Tasks
          </button>
        </Link>
      </div>
    </div>
  )
}
