import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CycleContext } from "../../../../contexts/CycleContext";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {

    const { activeCycle } = useContext(CycleContext);
    const { register } = useFormContext();

    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
                list="task-suggestions"
                placeholder="Dê um nome para seu projeto"
                {...register('task')}
                disabled={!!activeCycle}
            />

            <datalist id="task-suggestions">
                <option value="Projeto 1" />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
                type="number"
                placeholder="00"
                step={5}
                min={1}
                max={60}
                {...register('minutesAmount', { valueAsNumber: true })}
                disabled={!!activeCycle}
            />

            <span>minutos.</span>
        </FormContainer>
    );
}