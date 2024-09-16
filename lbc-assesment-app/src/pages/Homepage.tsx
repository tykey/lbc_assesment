import { useContext } from 'react'
import { ToastContext } from '../App'
import { Task, ToastType } from '../constants/types'
import AddTaskComponent from '../shared/components/addTask/AddTaskComponent'
import Footer from '../shared/components/footer/Footer'
import PaginationComponent from '../shared/components/pagination/PaginationComponent'
import TasksList from '../shared/components/tasksList/TasksList'
import { usePagination } from '../shared/hooks/usePagination'
import { useTasks } from '../shared/hooks/useTasks'
import { pt } from '../shared/translations/pt'
import {
  ContentMenu,
  HomepageContent,
  HomepageContentWrapper,
  HomepageHeader,
  HomepageWrapper,
  MenuItemContainer,
  TotalTasksSpan,
} from './Homepage.styled'

const TEST_PAGE_SIZE = 5

const Homepage = () => {
  const toast = useContext(ToastContext)

  const { tasks, onAddTask, onRemoveTask } = useTasks()

  const {
    currPage,
    numberOfPages,
    onClickPreviousPage,
    onClickNextPage,
    onPageChange,
  } = usePagination(tasks.length, TEST_PAGE_SIZE)

  const addTaskCallback = (taskDescription: string) => {
    onAddTask(taskDescription)
    toast.show(ToastType.Success, pt.pages.homepage.add_success, 4)
  }

  const removeTaskCallback = (taskIndex: number) => {
    onRemoveTask(taskIndex)
    toast.show(ToastType.Success, pt.pages.homepage.remove_success, 4)
  }

  return (
    <HomepageWrapper>
      <HomepageContentWrapper>
        <HomepageHeader>
          <span>{pt.pages.homepage.my_tasks}</span>
        </HomepageHeader>
        <HomepageContent>
          <ContentMenu key="menu1" flexWrap="wrap">
            <MenuItemContainer>
              <AddTaskComponent onAdd={addTaskCallback} />
            </MenuItemContainer>
            <MenuItemContainer flexGrow={0} isHidden={numberOfPages === 0}>
              <PaginationComponent
                currPage={currPage}
                numberOfPages={numberOfPages}
                onClickNext={onClickNextPage}
                onClickPrevious={onClickPreviousPage}
                onPageChange={onPageChange}
              />
            </MenuItemContainer>
          </ContentMenu>
          <TasksList tasks={tasks} onRemoveTask={removeTaskCallback} />
          <ContentMenu key="menu2" flexWrap="wrap-reverse">
            <MenuItemContainer>
              <TotalTasksSpan>
                {pt.pages.homepage.total_tasks(tasks.length)}
              </TotalTasksSpan>
            </MenuItemContainer>
            <MenuItemContainer isHidden={numberOfPages === 0}>
              <PaginationComponent
                currPage={currPage}
                numberOfPages={numberOfPages}
                onClickNext={onClickNextPage}
                onClickPrevious={onClickPreviousPage}
                onPageChange={onPageChange}
              />
            </MenuItemContainer>
          </ContentMenu>
        </HomepageContent>
      </HomepageContentWrapper>
    </HomepageWrapper>
  )
}

export default Homepage
