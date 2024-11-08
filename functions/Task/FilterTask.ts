// functions/Task/FilteringTasks.ts

import { TaskFetch } from '@/utils/TaskformInterface'

/**
 * Filter tasks by selected month
 * @param tasks - Object containing all tasks grouped by user or category
 * @param month - Selected month index (0 for January, 1 for February, etc.)
 * @returns Filtered tasks for the selected month
 */
export const filteredTasksByMonth = (
  tasks: { [key: string]: TaskFetch[] },
  month: number
) => {
  if (!tasks || month === undefined) return {}

  // Filter tasks by month
  const filteredTasks: { [key: string]: TaskFetch[] } = {}

  Object.keys(tasks).forEach((key) => {
    const userTasks = tasks[key].filter((task) => {
      const taskMonth = new Date(task.createdAt).getMonth() // Extract month from task date
      return taskMonth === month
    })

    if (userTasks.length > 0) {
      filteredTasks[key] = userTasks
    }
  })

  return filteredTasks
}
