import { Task } from '../constants/types'
import AddTaskComponent from '../shared/components/addTask/AddTaskComponent'
import Footer from '../shared/components/footer/Footer'
import PaginationComponent from '../shared/components/pagination/PaginationComponent'
import TasksList from '../shared/components/tasksList/TasksList'
import { usePagination } from '../shared/hooks/usePagination'
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

const TEST_TASKS: Task[] = [
  {
    description: 'Falar com o Filipe Zuzarte',
    creationDate: new Date(),
  },
  {
    description: 'Fazer deploy do projeto',
    creationDate: new Date(),
  },
  {
    description: 'Fazer a folha de horas',
    creationDate: new Date(),
  },
]

const TEST_PAGE_SIZE = 2

const Homepage = () => {
  const {
    currPage,
    numberOfPages,
    onClickPreviousPage,
    onClickNextPage,
    onPageChange,
  } = usePagination(TEST_TASKS.length, TEST_PAGE_SIZE)

  const onAddTask = (task: string) => {
    alert(`add task ${task}`)
  }

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
          <TasksList tasks={TEST_TASKS} />
          <ContentMenu>
            <MenuItemContainer>
              <TotalTasksSpan>
                {pt.pages.homepage.total_tasks(TEST_TASKS.length)}
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
