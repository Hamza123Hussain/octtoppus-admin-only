import { calculateTotalSalary } from '@/functions/Frontend/SalaryTotal'
import { ReportCardProps } from '@/utils/Report_Interface'
import { useRef } from 'react'
import ReportHead from './ReportHead'
import ReportBody from './ReportBody'
import DownloadButton from './DownloadButton'

const ReportCard: React.FC<ReportCardProps> = ({
  mergedData,
  totalTasks,
  highPriorityTasks,
  lowPriorityTasks,
}) => {
  const reportRef = useRef(null)
  const formattedTotalSalary = Math.floor(
    calculateTotalSalary(mergedData)
  ).toLocaleString()

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Main Report Container */}
      <div
        ref={reportRef}
        className="w-full max-w-7xl  rounded-lg overflow-hidden bg-white"
      >
        <ReportHead />

        {/* Add a wrapper with overflow and max-width */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-center border-collapse border border-gray-200">
            <thead>
              <tr className="bg-purple-500 text-white text-sm font-semibold">
                <th className="px-3 py-2 whitespace-nowrap">Username</th>
                <th className="px-3 py-2 whitespace-nowrap">
                  High Priority Tasks
                </th>
                <th className="px-3 py-2 whitespace-nowrap">
                  Medium Priority Tasks
                </th>
                <th className="px-3 py-2 whitespace-nowrap">
                  Low Priority Tasks
                </th>
                <th className="px-3 py-2 whitespace-nowrap">Attendance %</th>
                <th className="px-3 py-2 whitespace-nowrap">Tasks %</th>
                <th className="px-3 py-2 whitespace-nowrap">Performance %</th>
                <th className="px-3 py-2 whitespace-nowrap">Salary</th>
              </tr>
            </thead>
            <ReportBody mergedData={mergedData} />
          </table>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-gray-100">
          <div className="bg-[#b473ff] text-white py-4 px-4 text-center rounded-md shadow-md">
            <h2 className="text-lg font-bold">Low Priority Tasks</h2>
            <p className="text-2xl font-semibold">{lowPriorityTasks}</p>
          </div>
          <div className="bg-[#b473ff] text-white py-4 px-4 text-center rounded-md shadow-md">
            <h2 className="text-lg font-bold">Medium Priority Tasks</h2>
            <p className="text-2xl font-semibold">
              {totalTasks - (highPriorityTasks + lowPriorityTasks)}
            </p>
          </div>
          <div className="bg-[#b473ff] text-white py-4 px-4 text-center rounded-md shadow-md">
            <h2 className="text-lg font-bold">High Priority Tasks</h2>
            <p className="text-2xl font-semibold">{highPriorityTasks}</p>
          </div>
          <div className="bg-[#b473ff] text-white py-4 px-4 text-center rounded-md shadow-md">
            <h2 className="text-lg font-bold">Total Tasks</h2>
            <p className="text-2xl font-semibold">{totalTasks}</p>
          </div>
        </div>

        {/* Total Salaries Section */}
        <div className="bg-[#b473ff] text-white py-6 px-4 text-center rounded-md shadow-md m-4">
          <h2 className="text-lg font-bold">Total Salaries To Be Paid</h2>
          <p className="text-2xl font-semibold">{formattedTotalSalary}</p>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-6">
        <DownloadButton text="Performance" reportRef={reportRef} />
      </div>
    </div>
  )
}

export default ReportCard
