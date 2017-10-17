import styled from 'styled-components';

const Wrapper = styled.div`
    border-left: 30px solid ${(prop) => prop.theme.colors.secondary};
`;

export default Wrapper;
