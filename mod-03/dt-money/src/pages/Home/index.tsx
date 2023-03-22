import { useContextSelector } from "use-context-selector";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Table } from "../../components/Table";
import { SearchForm } from "./components/SearchForm";

import { TransactionsContext } from "../../contexts/Transactions";

import { HomeContainer } from "./styles";

export function Home() {

    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions;
    });

    return (
        <HomeContainer>
            <Header />
            <main>
                <Summary />

                <SearchForm />
                
                <Table transactions={transactions}/>
            </main>
        </HomeContainer>

    );
}