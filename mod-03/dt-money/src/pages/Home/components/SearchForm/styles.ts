import styled from "styled-components";

export const FormContainer = styled.form`
    width: 100%;
    margin-top: 5rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    input {
        flex: 1;
        height: 3.3rem;
        background: ${props => props.theme['gray-900']};
        border: 1px solid transparent;
        border-radius: 6px;
        padding: 1rem;

        font-size: 0.9rem;
        color: ${props => props.theme['gray-300']};

        &::placeholder {
            color: ${props => props.theme['gray-500']};
        }

        &:focus {
            border-color: ${props => props.theme['green-500']}; 
        }
    }

    button {
        width: 9.1rem;
        height: 3.3rem;
        background: transparent;
        border: 1px solid ${props => props.theme['green-500']};
        border-radius: 6px;

        font-size: 0.9rem;
        font-weight: 700;
        color: ${props => props.theme['green-500']};

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &:not(:disabled):hover {
            background: ${props => props.theme['green-200']};
            color: ${props => props.theme.white};
        }
    }
`;