import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NewLinkArea from '../../atoms/NewLinkArea/NewLinkArea';
import Checkbox from '../Checkbox/Checkbox';

const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const OneLinkArea = styled(NewLinkArea)`
  margin: 10px auto;
  &::placeholder {
    color: #eeeeee;
  }
`;

const LinkOptions = ({
  handleOptionCheckbox,
  oneLink,
  handleOneLink,
  uniqueHrefs,
}) => (
  <>
    <OptionsContainer>
      {uniqueHrefs.length === 1 ? null : (
        <Checkbox
          label='jeden link'
          id='oneLink'
          onChange={handleOptionCheckbox}
        />
      )}
      <Checkbox label='preURL' id='preUrl' onChange={handleOptionCheckbox} />
    </OptionsContainer>
    <OptionsContainer>
      {oneLink ? (
        <OneLinkArea onChange={handleOneLink} placeholder='http://...' active />
      ) : null}
    </OptionsContainer>
  </>
);

LinkOptions.propTypes = {
  handleOptionCheckbox: PropTypes.func,
  oneLink: PropTypes.bool,
  handleOneLink: PropTypes.func,
  uniqueHrefs: PropTypes.array,
};

export default LinkOptions;
