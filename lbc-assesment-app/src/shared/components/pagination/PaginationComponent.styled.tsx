import styled from '@emotion/styled'
import {
  PAGINATION_BUTTONS_GAP,
  PAGINATION_WRAPPER_GAP,
} from '../../../constants/dimensions'
import {
  GRAY_200,
  GRAY_500,
  GRAY_700,
  PRIMARY_COLOR,
} from '../../../constants/colors'

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: ${PAGINATION_WRAPPER_GAP};
`
export const PaginationButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: ${PAGINATION_BUTTONS_GAP};
`

type NavigationButtonProps = {
  isDisabled?: boolean
}

export const NavigationButton = styled.button<NavigationButtonProps>`
  border: none;
  background-color: white;
  color: white;
  border: solid 1px ${GRAY_200};
  border-radius: 6px;
  cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
  padding: 12px 16px;
  transition: all 0.1s ease-out;

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  color: ${GRAY_500};

  &:hover {
    ${(props) => (!props.isDisabled ? 'border: solid 1px ${GRAY_500};' : '')}
  }
`

export const CurrPageContainer = styled.div`
  background-color: ${PRIMARY_COLOR};
  padding: 12px 16px;
  border-radius: 6px;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
`

export const PaginationSelect = styled.select`
  padding: 12px 16px;
  background-color: white;
  border-radius: 6px;
  border: solid 1px ${GRAY_200};
  color: ${GRAY_700};
`
