import { memo, useCallback, useEffect, useState } from 'react'
import {
  CurrPageContainer,
  NavigationButton,
  PaginationButtonsContainer,
  PaginationSelect,
  PaginationWrapper,
} from './PaginationComponent.styled'
import { BodyText } from '../../styles/generalStyles'
import { GRAY_700 } from '../../../constants/colors'
import { pt } from '../../translations/pt'

type PaginationComponentProps = {
  numberOfPages: number
  currPage: number
  onClickPrevious: () => void
  onClickNext: () => void
  onPageChange: (page: number) => void
}

const PaginationComponent = ({
  numberOfPages,
  currPage,
  onClickPrevious,
  onClickNext,
  onPageChange,
}: PaginationComponentProps) => {
  const onChangeSelect = useCallback((event: any) => {
    onPageChange(event.target.value)
  }, [])

  return (
    <PaginationWrapper>
      <BodyText color={GRAY_700}>
        {pt.components.pagination.page_info(currPage, numberOfPages)}
      </BodyText>
      <PaginationButtonsContainer>
        <NavigationButton onClick={onClickPrevious}>
          {pt.components.pagination.previous_page}
        </NavigationButton>
        <CurrPageContainer>{currPage}</CurrPageContainer>
        <NavigationButton onClick={onClickNext}>
          {pt.components.pagination.next_page}
        </NavigationButton>
        <PaginationSelect value={currPage} onChange={onChangeSelect}>
          {[...new Array(numberOfPages)].map((_elem: any, index: number) => {
            return (
              <option key={`option_${index + 1}`} value={index + 1}>
                {index + 1}
              </option>
            )
          })}
        </PaginationSelect>
      </PaginationButtonsContainer>
    </PaginationWrapper>
  )
}

export default memo(PaginationComponent)
