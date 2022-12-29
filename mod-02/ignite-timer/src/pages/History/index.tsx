import { Container, Status, TableContainer } from "./styles";

export function History() {
    return (
        <Container>
            <h2> Meu histórico </h2>

            <TableContainer>
                <table>
                    <thead>
                        <tr>
                            <th> Tarefa </th>
                            <th> Duração </th>
                            <th> Inicio </th>
                            <th> Status </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td> Tarefa 1 </td>
                            <td> 10 minutos </td>
                            <td> Há cerca de 2 meses </td>
                            <td>
                                <Status statusColor="yellow"> Em andamento </Status>
                            </td>
                        </tr>
                        <tr>
                            <td> Tarefa 1 </td>
                            <td> 10 minutos </td>
                            <td> Há cerca de 2 meses </td>
                            <td>
                                <Status statusColor="green"> Concluido </Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </TableContainer>
        </Container>
    )
}