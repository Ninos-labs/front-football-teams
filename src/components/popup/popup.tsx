import Helmet from 'react-helmet';
import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';

import StyledPopup from './popup.styled';

const Popup = ({ children }: any) => (
  <Fragment>
    <Helmet>
      <body className="fixed" />
    </Helmet>
    {createPortal(
      <StyledPopup>{children}</StyledPopup>,
      document.getElementById('modal-root') as any
    )}
  </Fragment>
);

export default Popup;
