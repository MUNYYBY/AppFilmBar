import {SET_CALL_TASK_SCHEDULE} from '../../constants/ActionTypes';
import {CallModal} from '../../types/schedule';

const initialState = {
  call: null,
  video: [],
  messages: [],
};

const ScheduleReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_CALL_TASK_SCHEDULE: {
      return {
        ...state,
        call: {
          id: action.payload.id,
          avatar: action.payload.avatar,
          callerId: action.payload.callerId,
          number: action.payload.number,
          countdown: action.payload.countdown,
          createdAt: action.payload.createdAt,
        } as CallModal,
      };
    }
    default: {
      return state;
    }
  }
};

export default ScheduleReducer;
