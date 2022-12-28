import { Play } from "phosphor-react";

import { Container, FormContainer, Countdown, Separator, TaskInput, MinutesAmountInput } from "./styles";

export function Home() {
    return (
        <Container>
            <form>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput id="task" placeholder="Dê um nome para seu projeto"/>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" />

                    <span>minutos.</span>
                </FormContainer>

                <Countdown>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </Countdown>

                <button type="submit">
                    <Play size={24}/>
                    Começar
                </button>
            </form>
        </Container>
    );
}