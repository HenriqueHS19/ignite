import { differenceInSeconds } from "date-fns";
import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { addNewCycleAction, finishedCycleAction, interruptedCycleAction } from "../../reducers/cycles/actions";

import { cyclesReducer, ICycle } from "../../reducers/cycles/reduce";

interface ICreateCycle {
    task: string;
    minutesAmount: number;
}

interface ICycleContext {
    cycles: ICycle[];
    activeCycle: ICycle | undefined;
    amountSecondsPassed: number;
    createCycle: (data: ICreateCycle) => void;
    markFinishedCycle: () => void;
    interruptedCycle: () => void;
    setSecondsPassed: (seconds: number) => void;
}

export const CycleContext = createContext({} as ICycleContext);

interface ICycleContextProvider {
    children: ReactNode;
}

export function CycleContextProvider({ children }: ICycleContextProvider) {
    const [cyclesState, dispatch] = useReducer(
        cyclesReducer,
        { cycles: [], activeCycleId: null },
        function () {
            const stateJSON = localStorage.getItem('@ignite-timer:cycles-state-1.0.0');

            if (stateJSON) {
                console.log(JSON.parse(stateJSON));
                return JSON.parse(stateJSON);
            }
            else {
                return { cycles: [], activeCycleId: null };
            }
        });

    const { cycles, activeCycleId } = cyclesState;

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);    

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(function () {
        if (activeCycle) {
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
        }

        return 0;
    });

    useEffect(function () {
        const stateJSON = JSON.stringify(cyclesState);

        console.log(stateJSON);

        localStorage.setItem('@ignite-timer:cyles-state-1.0.0', stateJSON);
    }, [cyclesState]);

    function createCycle(data: ICreateCycle) {
        const newCycle: ICycle = {
            id: String(new Date().getTime()),
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        };

        dispatch(addNewCycleAction(newCycle));

        setAmountSecondsPassed(0);
    }

    function markFinishedCycle() {
        dispatch(finishedCycleAction());
    }

    function interruptedCycle() {
        dispatch(interruptedCycleAction());
    }

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds);
    }

    return (
        <CycleContext.Provider value={{ cycles, activeCycle, amountSecondsPassed, createCycle, markFinishedCycle, interruptedCycle, setSecondsPassed }}>
            {children}
        </CycleContext.Provider>
    );
}