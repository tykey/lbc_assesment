import styled from '@emotion/styled'

type TextProps = {
  color: string
}

export const BodyText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  color: ${(props) => props.color};
`
