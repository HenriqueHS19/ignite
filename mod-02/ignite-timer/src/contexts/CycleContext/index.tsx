import { createContext, ReactNode, useState } from "react";

interface ICycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

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
    const [cycles, setCycles] = useState<ICycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    function createCycle(data: ICreateCycle) {
        const newCycle: ICycle = {
            id: String(new Date().getTime()),
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        };

        setCycles((state) => [...state, newCycle]);
        setActiveCycleId(newCycle.id);
        setAmountSecondsPassed(0);
    }

    function markFinishedCycle() {
        setCycles((state) =>
            state.map(function (cycle) {
                if (cycle.id === activeCycleId) {
                    return { ...cycle, finishedDate: new Date };
                }
                else {
                    return cycle;
                }
            }));

            setActiveCycleId(null);
    }

    function interruptedCycle() {
        setCycles((state) =>
            state.map(function (cycle) {
                if (cycle.id === activeCycleId) {
                    return { ...cycle, interruptedDate: new Date };
                }
                else {
                    return cycle;
                }
            }));

        setActiveCycleId(null);
    }

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds);
    }

    return (
        <CycleContext.Provider value={{ cycles, activeCycle, amountSecondsPassed, createCycle, markFinishedCycle, interruptedCycle, setSecondsPassed }}>
            { children }
        </CycleContext.Provider>
    );
}