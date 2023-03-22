
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { TransactionsContext } from "../../../../contexts/Transactions";

import { FormContainer } from "./styles";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = zod.object({
    search: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export function SearchForm() {

    const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
        return context.fetchTransactions;
    });

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.search);
    }

    return (
        <FormContainer onSubmit={handleSubmit(handleSearchTransactions)}>

            <input 
                type="text" 
                placeholder="Busque uma transação" 
                {...register('search')}
            />

            <button disabled={ isSubmitting }>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </FormContainer>

    );
}