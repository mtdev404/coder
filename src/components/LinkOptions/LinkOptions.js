import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NewLinkArea from '../NewLinkArea/NewLinkArea';
import Checkbox from '../Checkbox/Checkbox';

const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const OneLinkArea = styled(NewLinkArea)`
  margin: 10px auto;
`;

const LinkOptions = ({ handleOptionCheckbox, oneLink }) => (
  <>
    <OptionsContainer>
      <Checkbox
        label='jeden link'
        id='oneLink'
        onChange={handleOptionCheckbox}
      />
      <Checkbox label='preURL' id='preUrl' onChange={handleOptionCheckbox} />
    </OptionsContainer>
    <OptionsContainer>
      {oneLink ? <OneLinkArea active /> : null}
    </OptionsContainer>
  </>
);

LinkOptions.propTypes = {
  handleOptionCheckbox: PropTypes.func,
  oneLink: PropTypes.bool,
};

export default LinkOptions;
