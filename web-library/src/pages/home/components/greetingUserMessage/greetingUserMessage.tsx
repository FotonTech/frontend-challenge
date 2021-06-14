import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px 30px 20px;
  font-size: 24px;
`

interface UserMessageProps {
  useRedColor?: boolean
}

const UserMessage = styled.span<UserMessageProps>`
  line-height: 30px;
  font-weight: 600;
  color: ${({ useRedColor }) => useRedColor ? '#EE6876' : 'auto'};
`

const DEFAULT_USER_MESSAGE = 'Foton'

interface GreetingUserMessageProps {
  userName?: string
}

const GreetingUserMessage: React.FC<GreetingUserMessageProps> = ({ userName }) => {

  return (
    <Wrapper>
      <UserMessage>
        Hi,&nbsp; {/* Blank space */}
      </UserMessage>
      <UserMessage useRedColor>
      {userName || DEFAULT_USER_MESSAGE}! &#128075; {/* Hand wave emoji */}
      </UserMessage>
    </Wrapper>
    
  )
}

export default GreetingUserMessage
