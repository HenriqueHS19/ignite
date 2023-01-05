import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { HandPalm, Play } from "phosphor-react";

import { CycleContext } from '../../contexts/CycleContext';

import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";

import { Container, StartButtonCountdown, StopButtonCountdown } from "./styles";

const cycleSchema = zod.object({
    task: zod.string().min(1, 'Infome a tarefa'),
    minutesAmount: zod.number().
        min(1, 'O ciclo precisa ser de mínimo 5 minutos').
        max(60, 'o cilo precisa de ser de máximo 60 minutos'),
});

export type TCycleFormData = zod.infer<typeof cycleSchema>;

export function Home() {

    const { createCycle, activeCycle, interruptedCycle } = useContext(CycleContext);

    const newCycleForm = useForm<TCycleFormData>({
        resolver: zodResolver(cycleSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });

    const { handleSubmit, watch, reset } = newCycleForm;

    const isTask = watch('task');

    function handleCreateCycle(data: TCycleFormData) {
        createCycle(data);
        reset();
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(handleCreateCycle)}>
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <Countdown />

                {!activeCycle ?
                    <StartButtonCountdown type="submit" disabled={!isTask}>
                        <Play size={24} />
                        Começar
                    </StartButtonCountdown>
                    :
                    <StopButtonCountdown onClick={interruptedCycle} type="button">
                        <HandPalm size={24} />
                        Interromper
                    </StopButtonCountdown>
                }
            </form>
        </Container>
    );
}