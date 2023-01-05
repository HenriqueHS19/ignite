import styled from 'styled-components';

export const CountdownContainer = styled.div`
    width: 100%;
    
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    font-weight: 700;
    color: ${props => props.theme["gray-100"]};

    display: flex;
    align-items: center;
    gap: 1rem;

    span {
        flex: 1;
        background: ${props => props.theme["gray-700"]};
        border-radius: 8px;
        padding: 1rem;
    }
`;

export const Separator = styled.div`
    width: 4rem;
    color: ${props => props.theme["green-500"]};
    padding: 2rem 0;
    overflow: hidden;

    display: flex;
    justify-content: center;
`;
