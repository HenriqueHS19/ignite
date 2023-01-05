import styled from 'styled-components';

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
    color: ${props => props.theme["gray-100"]};

    transition: border-color .2s;

    &::placeholder {
        color: solid ${props => props.theme["gray-500"]};
    }

    &:focus {
        border-color: ${props => props.theme["green-500"]};
    }

    &:disabled {
        cursor: not-allowed;
    }

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`;

export const TaskInput = styled(BasicInput)`
    flex: 1;
`;

export const MinutesAmountInput = styled(BasicInput)`
    width: 4rem;
`;