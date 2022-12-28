import styled from 'styled-components';

export const Container = styled.section`
    width: 75rem;
    height: calc(100vh - 10rem);
    background: ${props => props.theme['gray-800']};
    border-radius: 8px;
    margin: 5rem auto;
    padding: 2.5rem;
`;
