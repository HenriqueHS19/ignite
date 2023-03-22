import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { TableContainer, PriceHighlight } from "./styles";

interface ITransactions {
    id: number;
    description: string;
    price: number;
    type: 'income' | 'outcome';
    category: string;
    createdAt: string;
}

interface ITable {
    transactions: ITransactions[];
}

export function Table({ transactions }: ITable) {
    return (
        <TableContainer>
            <tbody>
                {transactions.map((transaction) => {
                    return (
                        <tr key={transaction.id}>
                            <td> {transaction.description} </td>
                            <td> 
                                <PriceHighlight variant={transaction.type}> 
                                    {transaction.type === 'outcome' && '- '}
                                    {priceFormatter.format(transaction.price)}
                                </PriceHighlight> </td>
                            <td> {transaction.category} </td>
                            <td> {dateFormatter.format(new Date(transaction.createdAt))} </td>
                        </tr>
                    );
                })}
            </tbody>
        </TableContainer>
    );
}