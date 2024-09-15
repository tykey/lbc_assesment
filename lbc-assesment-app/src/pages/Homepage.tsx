import { Task } from '../constants/types'
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
  const { tasks, onAddTask, onRemoveTask } = useTasks([])

  const {
    currPage,
    numberOfPages,
    onClickPreviousPage,
    onClickNextPage,
    onPageChange,
  } = usePagination(tasks.length, TEST_PAGE_SIZE)

  return (
    <HomepageWrapper>
      <HomepageContentWrapper>
        <HomepageHeader>
          <span>{pt.pages.homepage.my_tasks}</span>
        </HomepageHeader>
        <HomepageContent>
          <ContentMenu>
            <MenuItemContainer>
              <AddTaskComponent onAdd={onAddTask} />
            </MenuItemContainer>
            <MenuItemContainer flexGrow={0}>
              <PaginationComponent
                currPage={currPage}
                numberOfPages={numberOfPages}
                onClickNext={onClickNextPage}
                onClickPrevious={onClickPreviousPage}
                onPageChange={onPageChange}
              />
            </MenuItemContainer>
          </ContentMenu>
          <TasksList tasks={tasks} onRemoveTask={onRemoveTask} />
          <ContentMenu>
            <MenuItemContainer>
              <TotalTasksSpan>
                {pt.pages.homepage.total_tasks(tasks.length)}
              </TotalTasksSpan>
            </MenuItemContainer>
            <MenuItemContainer>
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
