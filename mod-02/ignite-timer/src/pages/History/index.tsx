import { useContext } from "react";
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { CycleContext } from "../../contexts/CycleContext";

import { Container, Status, TableContainer } from "./styles";

export function History() {
    const { cycles } = useContext(CycleContext);

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
                        {cycles.map(function (cycle) {
                            return (
                                <tr key={cycle.id}>
                                    <td> {cycle.task} </td>
                                    <td> {cycle.minutesAmount} minutos </td>
                                    <td>
                                        {formatDistanceToNow(cycle.startDate, {
                                            addSuffix: true,
                                            locale: ptBR,
                                        })}
                                    </td>
                                    <td>
                                        {cycle.finishedDate && <Status statusColor="green"> Concluido </Status>}
                                        {cycle.interruptedDate && <Status statusColor="red"> Interrompido </Status>}
                                        {!cycle.finishedDate && !cycle.interruptedDate && <Status statusColor="yellow"> Em andamento </Status>}
                                    </td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </TableContainer>
        </Container>
    )
}