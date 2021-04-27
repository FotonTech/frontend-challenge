import styled from 'styled-components';

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 59px;
    left: 0px;
    bottom: 0px;
    background: #FFFFFF;
    font-family: SF Pro Display;
`;

const FlexDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const BottomButtom = styled.div`
    text-align: center;
`;

const BottomButtomIcon = styled.div`

`;

const BottomButtomText = styled.div`

`;

export const BottomBar = () => {
    return (
        <Background>
            <FlexDiv>
                <BottomButtom>
                    <BottomButtomIcon>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1 6.22222L9 0L17 6.22222V16C17 16.9818 16.2041 17.7778 15.2222 17.7778H2.77778C1.79594 17.7778 1 16.9818 1 16V6.22222Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.33333 17.7778V8.88892H11.6667V17.7778" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </BottomButtomIcon>
                    <BottomButtomText>Home</BottomButtomText>
                </BottomButtom>
                <BottomButtom>
                    <BottomButtomIcon>
                        <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 15.75C1 14.5074 2.00736 13.5 3.25 13.5H15.4" stroke="#BFBEBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.25 0H15.4V18H3.25C2.00736 18 1 16.9926 1 15.75V2.25C1 1.00736 2.00736 0 3.25 0Z" stroke="#BFBEBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </BottomButtomIcon>
                    <BottomButtomText>Libraries</BottomButtomText>
                </BottomButtom>
                <BottomButtom>
                    <BottomButtomIcon>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 18V16C17 13.7909 15.2091 12 13 12H5C2.79086 12 1 13.7909 1 16V18" stroke="#BFBEBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="9" cy="4" r="4" stroke="#BFBEBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </BottomButtomIcon>
                    <BottomButtomText>Profile</BottomButtomText>
                </BottomButtom>
            </FlexDiv>
        </Background>
    );
};

export default BottomBar;