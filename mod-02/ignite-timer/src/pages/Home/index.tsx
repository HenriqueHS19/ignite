import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { Container, FormContainer, Countdown, Separator, TaskInput, MinutesAmountInput } from "./styles";

const cycleSchema = zod.object({
    task: zod.string().min(1, 'Infome a tarefa'),
    minutesAmount: zod.number().
        min(5, 'O ciclo precisa ser de mínimo 5 minutos').
        max(60, 'o cilo precisa de ser de máximo 60 minutos'),
});

type TCycleFormData = zod.infer<typeof cycleSchema>;

export function Home() {

    const { register, handleSubmit, watch, reset } = useForm<TCycleFormData>({
        resolver: zodResolver(cycleSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });

    function createNewCycle(data: TCycleFormData) {
        console.log(data);
        reset();
    }

    const isTask = watch('task');

    return (
        <Container>
            <form onSubmit={handleSubmit(createNewCycle)}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        list="task-suggestions" 
                        placeholder="Dê um nome para seu projeto"
                        {...register('task')}
                    />

                    <datalist id="task-suggestions">
                        <option value="Projeto 1" />
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput 
                        type="number" 
                        placeholder="00" 
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmount', { valueAsNumber: true })}
                    />

                    <span>minutos.</span>
                </FormContainer>

                <Countdown>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </Countdown>

                <button type="submit" disabled={!isTask}>
                    <Play size={24}/>
                    Começar
                </button>
            </form>
        </Container>
    );
}