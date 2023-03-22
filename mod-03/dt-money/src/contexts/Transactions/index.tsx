import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../../libs/axios";

interface ITransactions {
    id: number;
    description: string;
    price: number;
    type: 'income' | 'outcome';
    category: string;
    createdAt: string;
}

interface ITransactionsContext {
    transactions: ITransactions[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: ICreateTransaction) => void;
}

interface ICreateTransaction {
    description: string;
    price: number;
    type: 'income' | 'outcome',
    category: string;
}

interface ITransactionsProvider {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionsContext);

export function TransactionsProvider({ children }: ITransactionsProvider) {
    const [transactions, setTransactions] = useState<ITransactions[]>([]);

    const fetchTransactions = useCallback(async function (query?: string) {
        const response = await api.get('/transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        });

        setTransactions(response.data);
    }, []);

    const createTransaction = useCallback(async function (data: ICreateTransaction) {
        const { description, price, type, category } = data;

        const response = await api.post('/transactions', {
            description,
            category,
            price,
            type,
            createdAt: new Date(),
        });

        setTransactions(state => [response.data, ...state]);
    }, []);

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}