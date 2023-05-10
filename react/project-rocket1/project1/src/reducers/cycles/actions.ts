import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_CYCLE = 'ADD_CYCLE',
  INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
  MARK_CYCLE_AS_FINISHED = 'MARK_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CYCLE,
  }
}

export function markCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CYCLE_AS_FINISHED,
  }
}
