import React from 'react';
import { H4 } from './styled';

type GreetingsTypes = React.FC<{
  name: string;
}>;

const SearchField: GreetingsTypes = ({ name }) => {
  return (
    <H4>
      <span>Hi,</span>
      {'  '}
      {`${name}`}
      <span role="img" aria-label="Waving">
        👋
      </span>
    </H4>
  );
};

export default SearchField;
