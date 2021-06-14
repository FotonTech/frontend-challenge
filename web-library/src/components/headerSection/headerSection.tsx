
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  font-weight: 800;
`

const Title = styled.span`
  font-size: 18px;
`

const ActionButton = styled.span`
  font-size: 14px;
  color: #4ABDF1;
  :hover {
    cursor: pointer;
  }
`

interface HeaderSectionProps {
  title: string
  actionButton: string
  onClickActionButton?: () => void
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ title, actionButton, onClickActionButton }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ActionButton onClick={onClickActionButton} >{actionButton}</ActionButton>
    </Wrapper>
  )
}

export default HeaderSection


