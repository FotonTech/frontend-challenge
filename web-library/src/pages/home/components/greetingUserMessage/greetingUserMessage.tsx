import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px 30px 20px;
`

const UserMessage = styled.p`
  line-height: 30px;
`

const DEFAULT_USER_MESSAGE = 'user'

interface GreetingUserMessageProps {
  userName?: string
}

const GreetingUserMessage: React.FC<GreetingUserMessageProps> = ({ userName }) => {

  return (
    <Wrapper>
      <UserMessage>
        Hi,&nbsp;
      </UserMessage>
      <UserMessage>
      {userName || DEFAULT_USER_MESSAGE}! &#128075;
      </UserMessage>
    </Wrapper>
    
  )
}

export default GreetingUserMessage
