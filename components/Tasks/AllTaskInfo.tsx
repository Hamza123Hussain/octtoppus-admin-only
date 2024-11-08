'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { AllTasks } from '@/functions/Frontend/Alltasks'
import { RootState } from '@/utils/Redux/Store/Store'
import { TaskFetch } from '@/utils/TaskformInterface'
import Loader from '../Loader'
import TableHead from '../Layout/TableHead'
import MainTable from '../Attendance/MainTable'
import DownloadButton from '../Report/DownloadButton'
import SelectedMonths from '../Layout/SelectedMonths'
import { filteredTasksByMonth } from '@/functions/Task/FilterTask'

const AllTasksTable = () => {
  const reportRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const User = useSelector((state: RootState) => state.user)
  const Month = useSelector((state: RootState) => state.sort.Month)
  const [ALL_TASKS, setALL_TASKS] = useState<{ [key: string]: TaskFetch[] }>({})

  // Fetch all tasks based on user email
  useEffect(() => {
    if (User.Email) {
      setLoading(true)
      AllTasks(User.Email, setLoading, setALL_TASKS)
    }
  }, [User.Email])

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen justify-center items-center flex">
        <Loader />
      </div>
    )
  }

  // Filter tasks by the selected month
  const filteredTasks = filteredTasksByMonth(ALL_TASKS, Month)

  return (
    <>
      {/* Month Selector */}
      <SelectedMonths />

      {/* Tasks Table */}
      <div
        ref={reportRef}
        className="overflow-x-auto p-4 text-center w-[90vw] sm:w-auto mx-auto"
      >
        <h1 className="text-xl sm:text-3xl md:text-4xl text-purpleGradientStart px-2 text-center mb-5">
          ALL TASK DETAILS
        </h1>

        {Object.keys(filteredTasks).length > 0 ? (
          <table className="min-w-full bg-blend-darken border-2 bg-[#bd8bff] text-white border-charcoal-gray shadow-md rounded-lg">
            <TableHead />
            <MainTable groupedAttendance={filteredTasks} />
          </table>
        ) : (
          <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
            <h2 className="text-2xl text-white font-bold mb-4">
              No Tasks Found
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              It seems there are no tasks available for the selected month.
              Please check back later.
            </p>
          </div>
        )}
      </div>

      {/* Download Button */}
      <div className="mt-4 mx-auto flex justify-center items-center">
        <DownloadButton text="Task" reportRef={reportRef} />
      </div>
    </>
  )
}

export default AllTasksTable
