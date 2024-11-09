import { TaskFetch } from '@/utils/TaskformInterface'
import React from 'react'

const TaskTableRow = ({
  userData,
  records,
}: {
  userData: string
  records: TaskFetch[]
}) => {
  const tasksAssigned = records.length
  const tasksCompleted = records.filter(
    (task) => task.progress === 'DONE'
  ).length
  const HighPriority = records.filter((task) => task.priority === 'HIGH').length
  const MediumPriority = records.filter(
    (task) => task.priority === 'MEDIUM'
  ).length
  const TaskCompletion = records.reduce((acc, element) => {
    acc += element.TaskCompletion
    return acc
  }, 0)

  return (
    <tbody>
      <tr>
        <td className="border border-purple-600 text-[12px] sm:text-base md:text-lg p-4">
          {userData}
        </td>
        <td className="border border-purple-600 text-[12px] sm:text-base md:text-lg p-4">
          {HighPriority}
        </td>
        <td className="border border-purple-600 text-[12px] sm:text-base md:text-lg p-4">
          {MediumPriority}
        </td>
        <td className="border border-purple-600 text-[12px] sm:text-base md:text-lg p-4">
          {records.length - (MediumPriority + HighPriority)}
        </td>
        <td className="border border-purple-600 text-[12px] sm:text-base md:text-lg p-4">
          {tasksAssigned}
        </td>
        <td className="border border-purple-600 text-[12px] sm:text-base md:text-lg p-4">
          {tasksCompleted}
        </td>
        <td className="border border-purple-600 text-[12px] sm:text-base md:text-lg p-4">
          {(TaskCompletion / records.length).toFixed(2)}%
        </td>
      </tr>
    </tbody>
  )
}

export default TaskTableRow
