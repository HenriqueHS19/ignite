import { ICycle } from "./reduce";

export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    FINISHED_CYCLE = 'FINISHED_CYCLE',
    INTERRUPTED_CYCLE = 'INTERRUPTED_CYCLE',
}

export function addNewCycleAction(newCycle: ICycle) {
    return {
        type: ActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle,
        }
    }
}

export function finishedCycleAction() {
    return {
        type: ActionTypes.FINISHED_CYCLE,
    }
}

export function interruptedCycleAction () {
    return {
        type: ActionTypes.INTERRUPTED_CYCLE,
    }
}