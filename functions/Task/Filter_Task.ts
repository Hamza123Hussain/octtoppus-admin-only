import { TaskFetch } from '@/utils/TaskformInterface'

export const filteredTasks = (
  allTasks: TaskFetch[],
  statusFilter: string,
  timeFilter: string,
  priorityFilter: string,
  monthFilter: number,
  selectedUser?: string
) => {
  const filtered = allTasks.filter((task) => {
    const matchesTimeFilter =
      timeFilter === 'All' || task.TaskType === timeFilter

    const matchesStatusFilter =
      statusFilter === 'All' || task.progress === statusFilter

    const matchesPriorityFilter =
      priorityFilter === 'All' || task.priority === priorityFilter

    const TodoFilter = task.progress == 'TODO'

    const selectedUserFilter =
      selectedUser === 'All' || selectedUser === task.assignedTo

    // Month filtering logic
    const taskDate = new Date(task.createdAt)
    const taskMonth = taskDate.getMonth() // Get month as a number (0-11)
    const matchesMonthFilter = monthFilter === -1 || taskMonth === monthFilter // -1 can be used for "All"

    return (
      matchesTimeFilter &&
      matchesStatusFilter &&
      matchesPriorityFilter &&
      matchesMonthFilter &&
      selectedUserFilter &&
      TodoFilter
    )
  })

  // Sort the tasks so that "TODO" tasks come first
  return filtered.sort((a, b) => {
    if (a.progress === 'TODO' && b.progress !== 'TODO') return -1 // 'TODO' tasks should come first
    if (b.progress === 'TODO' && a.progress !== 'TODO') return 1
    return 0 // No change in order if both are the same or neither is "TODO"
  })
}
