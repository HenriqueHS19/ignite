import { useEffect, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from '@phosphor-icons/react';

import { TransactionsContext } from "../../contexts/Transactions";

import { SummaryContainer, Item } from "./styles";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {
    const [incomeTotal, setIncomeTotal] = useState(0);
    const [outcomeTotal, setOutcomeTotal] = useState(0);

    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions;
    });

    useEffect(() => {
        let incomeTotal = 0;
        let outcomeTotal = 0;

        transactions.map((transaction) => {
            if (transaction.type === 'income') {
                incomeTotal += transaction.price;
            }
            else {
                outcomeTotal += transaction.price;
            }
        });

        setIncomeTotal(incomeTotal);
        setOutcomeTotal(outcomeTotal);

    }, [transactions]);

    return (
        <SummaryContainer>
            <Item>
                <header>
                    <p> Entradas </p>
                    <ArrowCircleUp size={24} color="#00B37E" />
                </header>

                <strong> {priceFormatter.format(incomeTotal)} </strong>
            </Item>

            <Item>
                <header>
                    <p> Saídas </p>
                    <ArrowCircleDown size={24} color="#F75A68" />
                </header>

                <strong> {priceFormatter.format(outcomeTotal)} </strong>
            </Item>

            <Item>
                <header>
                    <p> Total </p>
                    <CurrencyDollar size={24} color="#FFFFFF" />
                </header>

                <strong> {priceFormatter.format(incomeTotal - outcomeTotal)} </strong>
            </Item>
        </SummaryContainer>
    );
}