import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    & :not(:first_child) {
      display: none;
    }
  }
`;

export default Wrapper;
