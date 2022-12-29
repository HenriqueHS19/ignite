import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    padding: 3.5rem;

    h2 {
        font-size: 1.5rem;
        color: ${props => props.theme["gray-100"]};
    }
`;

export const TableContainer = styled.div`
    flex: 1;
    overflow: auto;

    margin-top: 2rem;

    table{
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th {
          background: ${props => props.theme["gray-600"]}; 
          padding: 1.5rem;
          text-align: left;
          font-size: 0.8rem;
          color: ${props => props.theme["gray-100"]};

          &:first-child {
            width: 50%;
            border-top-left-radius: 8px;
          }
          &:last-child {
            border-top-right-radius: 8px;
          }
        }

        td {
            background: ${props => props.theme["gray-700"]};
            font-size: 0.8rem;
            line-height: 1.3rem;
            color: ${props => props.theme["gray-300"]};
            padding: 1rem 1.5rem;
            border-top: 4px solid ${props => props.theme["gray-800"]};

            &:first-child {
                
            }
        }
    }    
`;

const StatusColors = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500'
} as const;

interface IStatus {
    statusColor: keyof typeof StatusColors;
}

export const Status = styled.span<IStatus>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: ${props => props.theme[StatusColors[props.statusColor]]};
    }
`;