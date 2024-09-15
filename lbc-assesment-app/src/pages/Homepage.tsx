import AddTaskComponent from '../shared/components/addTask/AddTaskComponent'
import PaginationComponent from '../shared/components/pagination/PaginationComponent'
import TasksList from '../shared/components/tasksList/TasksList'
import { pt } from '../shared/translations/pt'
import {
  ContentMenu,
  HomepageContent,
  HomepageContentWrapper,
  HomepageHeader,
  MenuItemContainer,
} from './Homepage.styled'

const Homepage = () => {
  const onAddTask = (task: string) => {
    alert(`add task ${task}`)
  }

  return (
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
              maxItems={12}
              pageSize={10}
              onPageChange={() => {}}
            />
          </MenuItemContainer>
        </ContentMenu>
        <TasksList />
      </HomepageContent>
    </HomepageContentWrapper>
  )
}

export default Homepage
