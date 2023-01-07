import { produce } from 'immer';

import { ActionTypes } from "./actions";

export interface ICycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

interface ICycleState {
    cycles: ICycle[];
    activeCycleId: string | null;
}

export function cyclesReducer(state: ICycleState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_CYCLE:
            return produce(state, function (draft) {
                draft.cycles.push(action.payload.newCycle);
                draft.activeCycleId = action.payload.newCycle.id;
            })
        case ActionTypes.FINISHED_CYCLE: {
            const currentCycleIndex = state.cycles.findIndex((cycle) => {
                return cycle.id === state.activeCycleId;
            });

            if (currentCycleIndex < 0) {
                return state;
            }

            return produce(state, function (draft) {
                draft.cycles[currentCycleIndex].finishedDate = new Date();
                draft.activeCycleId = null;
            });
        }
        case ActionTypes.INTERRUPTED_CYCLE: {
            console.log('here');
            const currentCycleIndex = state.cycles.findIndex((cycle) => {
                return cycle.id === state.activeCycleId;
            });

            if (currentCycleIndex < 0) {
                return state;
            }

            return produce(state, function (draft) {
                draft.cycles[currentCycleIndex].interruptedDate = new Date();
                draft.activeCycleId = null;
            });
        }

        default:
            return state;
    }
}