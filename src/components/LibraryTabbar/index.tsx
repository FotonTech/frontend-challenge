import React from 'react';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import ShareIcon from '@material-ui/icons/Share';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';

import {
  TabbarContainer,
  StyledTabbar,
  TabbarItem,
  Line,
  ItemText,
} from './styles';

const LibraryTabbar: React.FC = () => {
  return (
    <TabbarContainer>
      <StyledTabbar>
        <TabbarItem>
          <ImportContactsRoundedIcon style={{ color: '#CFCBD2' }} />
          <ItemText>Read</ItemText>
        </TabbarItem>
        <Line />
        <TabbarItem>
          <HeadsetOutlinedIcon style={{ color: '#CFCBD2' }} />
          <ItemText>Listen</ItemText>
        </TabbarItem>
        <Line />
        <TabbarItem>
          <ShareIcon style={{ color: '#CFCBD2' }} />
          <ItemText>Share</ItemText>
        </TabbarItem>
      </StyledTabbar>
    </TabbarContainer>
  );
};

export default LibraryTabbar;
