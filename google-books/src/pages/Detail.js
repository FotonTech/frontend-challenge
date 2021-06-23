import React from 'react';
import DetailFooter from '../components/DetailFooter';
import DetailHeader from '../components/DetailHeader';
import DetailContent from '../components/DetailContent';
import DetailDisplay from '../styles/DetailDisplay';

export default function Detail() {
  return (
    <DetailDisplay>
      <DetailHeader />
      <DetailContent />
      <DetailFooter />
    </DetailDisplay>
  );
}
