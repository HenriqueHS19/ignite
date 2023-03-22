import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .75);

    position: fixed;
    inset: 0;
`;

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    background: ${props => props.theme["gray-800"]};
    border-radius: 6px;
    padding: 3rem;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        width: 100%;
        margin-top: 2rem;
        
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            flex: 1;
            height: 3.3rem;
            background: ${props => props.theme["gray-900"]};
            border: 1px solid ${props => props.theme["gray-900"]};
            border-radius: 6px;
            padding: 1rem;
            color: ${props => props.theme["gray-300"]};

            &::placeholder {
                color: ${props => props.theme["gray-500"]};
            }

            &:focus {
                border-color: ${props => props.theme["green-200"]};
            }
        }

        button[type='submit'] {
            width: 100%;
            height: 3.6rem;
            background: ${props => props.theme["green-500"]};
            border: none;
            border-radius: 6px;
            margin-top: 2.5rem;

            font-weight: 700;
            color: ${props => props.theme.white};

            &:hover {
                background: ${props => props.theme["green-200"]};
            }
        }
    }
`;

export const Title = styled(Dialog.Title)`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
`;

export const ContainerTypeButtonTransaction = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 1rem;

    button {
        flex: 1;
        height: 3.6rem;
        background: ${props => props.theme["gray-700"]};
        border: none;
        border-radius: 6px;

        color: ${props => props.theme["gray-300"]};

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        &:hover {
            background: ${props => props.theme["gray-600"]};
        }

        &.incomeSelected {
            background-color: ${props => props.theme["green-700"]};
            color: ${props => props.theme.white};

            svg {
                color: ${props => props.theme.white};
            }
        }
        &.outcomeSelected {
            background-color: ${props => props.theme["red-700"]};
            color: ${props => props.theme.white};

            svg {
                color: ${props => props.theme.white};
            }
        }
    }
`;

export const ButtonCloseModal = styled(Dialog.Close)`
    position: absolute;
    top: 1.7rem;
    right: 1.7rem;
    
    cursor: pointer;

    svg {
        color: ${props => props.theme["gray-700"]};
    }
`;