import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import parse from 'html-react-parser';
import {
  Container,
  Header,
  StyledThumbnail,
  Content,
  StyledTitle,
  StyledSubTitle,
  BackContainer,
  StyledButton,
  StyledText,
} from './styles';

import { useBooks } from '../../hooks/useBooks';

import Loading from '../../components/Loading/index';
import img from '../../assets/images/not-found.png';
import LibraryTabbar from '../../components/LibraryTabbar/index';

const Libraries: React.FC = () => {
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [item, setItem] = useState<any>(undefined);

  const params = useParams<{ id: string }>();
  const history = useHistory();

  const { getOne } = useBooks();

  useEffect(() => {
    getOne(params.id)
      .then((res) => {
        setItem(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {item !== undefined && (
        <>
          <Container>
            <Header>
              <BackContainer>
                <StyledButton onClick={() => history.goBack()}>
                  <KeyboardBackspaceIcon />
                </StyledButton>
              </BackContainer>
              <StyledThumbnail
                src={
                  item.data.volumeInfo.imageLinks
                    ? item.data.volumeInfo.imageLinks.thumbnail
                    : img
                }
              />
            </Header>
            <Content>
              <StyledTitle>
                {item.data.volumeInfo.title ? item.data.volumeInfo.title : ''}
              </StyledTitle>
              <StyledSubTitle>
                {item.data.volumeInfo.authors
                  ? item.data.volumeInfo.authors[0]
                  : ''}
              </StyledSubTitle>
              <StyledText>
                {item.data.volumeInfo.description
                  ? parse(item.data.volumeInfo.description)
                  : ''}
              </StyledText>
            </Content>
          </Container>
          <LibraryTabbar />
        </>
      )}
    </>
  );
};

export default Libraries;
