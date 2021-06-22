import React from 'react';
import DetailContentDisplay from './styles/DetailContentDisplay';

export default function DetailContent() {
  return (
    <DetailContentDisplay>
      <div className="header">
        <p className="title">
          <b>Hooked</b>
          : How to Build Habid-Forming Products
        </p>
        <p className="author">Nir Eyal</p>
      </div>
      <div className="content">
        <p>How do successful companies create products people can’t put down?</p>
        <p>Why do some products capture widespread attention while others flop?</p>
        <p>Why do some products capture widespread attention while others flop?</p>
        <p>Why do some products capture widespread attention while others flop?</p>
      </div>
    </DetailContentDisplay>
  );
}
