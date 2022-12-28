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

        button {
            width: 100%;
            height: 4rem;
            background: ${props => props.theme["green-500"]};
            border: none;
            border-radius: 8px;
            font-weight: 700;
            color: ${props => props.theme["gray-100"]};

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
        }
    }
`;

export const FormContainer = styled.div`
    width: 100%;
        
    font-size: 1.1rem;
    font-weight: 700;
    color: ${props => props.theme["gray-100"]};

    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
`;

const BasicInput = styled.input`
    background: transparent;
    border: 0;
    border-bottom: 2px solid ${props => props.theme["gray-500"]};
    padding: 0.5rem;
    outline: 0;

    font-weight: 700;
    color: solid ${props => props.theme["gray-100"]};

    transition: border-color .2s;

    &::placeholder {
        color: solid ${props => props.theme["gray-500"]};
    }

    &:focus {
        border-color: ${props => props.theme["green-500"]};
    }
`;

export const TaskInput = styled(BasicInput)`
    flex: 1;
`;

export const MinutesAmountInput = styled(BasicInput)`
    width: 4rem;
`;

export const Countdown = styled.div`
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