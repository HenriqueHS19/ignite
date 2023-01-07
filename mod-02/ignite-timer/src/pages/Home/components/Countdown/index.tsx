import { differenceInSeconds } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { CycleContext } from "../../../../contexts/CycleContext";
import { CountdownContainer, Separator } from "./styles";

export function Countdown() {

    const {activeCycle, markFinishedCycle, amountSecondsPassed, setSecondsPassed} = useContext(CycleContext);

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, '0');
    const seconds = String(secondsAmount).padStart(2, '0');

    useEffect(function () {

        let interval: number;

        if (activeCycle) {
            interval = setInterval(function () {
                const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate));

                if (secondsDifference >= totalSeconds) {
                    markFinishedCycle();
                    setSecondsPassed(totalSeconds);
                    clearInterval(interval);
                }
                else {
                    setSecondsPassed(secondsDifference);
                }
            });
        }

        return function () {
            clearInterval(interval);
        }

    }, [activeCycle]);

    useEffect(function () {
        if (activeCycle) {
            document.title = `${minutes}:${seconds} | Ignite Timer`;
        }
        else {
            document.title = 'Ignite Timer'
        }
    }, [activeCycle, minutes, seconds]);

    return (
        <CountdownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Separator>:</Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountdownContainer>
    );
}