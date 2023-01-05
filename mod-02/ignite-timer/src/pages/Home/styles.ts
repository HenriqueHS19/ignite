import styled from "styled-components";

export const Container = styled.div`
    width: 41.2rem;
    margin: 0 auto;
    margin-top: 4.3rem;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.7rem;
    }
`;

const BaseButton = styled.button`
    width: 100%;
    height: 4rem;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    color: ${props => props.theme["gray-100"]};
    transition: background-color .2s;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`

export const StartButtonCountdown = styled(BaseButton)`
    background: ${props => props.theme["green-700"]};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    &:not(:disabled):hover {
        background: ${props => props.theme["green-500"]};
    } 
`;

export const StopButtonCountdown = styled(BaseButton)`
    background: ${props => props.theme["red-700"]};

    &:hover {
        background: ${props => props.theme["red-500"]};
    }
`;

