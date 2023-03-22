import { ReactNode, useState } from "react";
import {  useContextSelector } from "use-context-selector";
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from '@radix-ui/react-dialog';
import * as zod from 'zod';

import { TransactionsContext } from "../../contexts/Transactions";

import { ButtonCloseModal, ContainerTypeButtonTransaction, Content, Overlay, Title } from "./styles";

interface IModal {
    children: ReactNode;
}

interface ITypeTransaction {
    type: 'income' | 'outcome' | null
}

const transactionFormSchema = zod.object({
    description: zod.string(),
    price: zod.number(),
    category: zod.string(),
});

type TransactionFormInputs = zod.infer<typeof transactionFormSchema>;

export function Modal({ children }: IModal) {
    const createTransaction = useContextSelector(TransactionsContext, (context) => {
        return context.createTransaction;
    });

    const [typeTransaction, setTypeTransaction] = useState<ITypeTransaction>();

    const { register, handleSubmit, reset } = useForm<TransactionFormInputs>({
        resolver: zodResolver(transactionFormSchema),
    });

    async function handleCreateTransaction(data: TransactionFormInputs) {
        if (typeTransaction?.type) {
            const { category, description, price } = data;

            await createTransaction({
                category,
                description,
                price,
                type: typeTransaction.type,
            });

            reset();
            setTypeTransaction({ type: null });
        }
    }

    function handleSetType(type: 'income' | 'outcome') {
        setTypeTransaction({ type });
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>

            <Dialog.Portal>
                <Overlay />

                <Content>
                    <Title> Nova transação </Title>

                    <form onSubmit={handleSubmit(handleCreateTransaction)}>

                        <input 
                            type="text" 
                            placeholder="Descrição" 
                            {...register('description')}
                        />

                        <input 
                            type="number" 
                            placeholder="Preço"
                            {...register('price', { valueAsNumber: true })}
                        />

                        <input 
                            type="text" 
                            placeholder="Categoria" 
                            {...register('category')}
                        />

                        <ContainerTypeButtonTransaction>
                            <button
                                type="button"
                                className={typeTransaction?.type === 'income' ? 'incomeSelected' : ''}
                                onClick={() => handleSetType('income')}
                            >
                                <ArrowCircleUp size={16} color="#00B37E" />
                                Entrada
                            </button>

                            <button
                                type="button"
                                className={typeTransaction?.type === 'outcome' ? 'outcomeSelected' : ''}
                                onClick={() => handleSetType('outcome')}
                            >
                                <ArrowCircleDown size={16} color="#F75A68" />
                                Saída
                            </button>
                        </ContainerTypeButtonTransaction>

                        <button type="submit"> Cadastrar </button>
                    </form>

                    <ButtonCloseModal asChild>
                        <X size={16} />
                    </ButtonCloseModal>
                </Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}