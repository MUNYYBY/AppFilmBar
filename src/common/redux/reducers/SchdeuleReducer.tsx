import {
  CLEAR_CALL_SCHEDULE,
  CLEAR_VIDEO_SCHEDULE,
  SET_CALL_TASK_SCHEDULE,
  SET_VIDEO_TASK_SCHEDULE,
} from '../../constants/ActionTypes';
import {CallModal, VideoModal} from '../../types/schedule';

const initialState = {
  call: null,
  video: null,
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
    case CLEAR_CALL_SCHEDULE: {
      return {
        ...state,
        call: null,
      };
    }
    case SET_VIDEO_TASK_SCHEDULE: {
      return {
        ...state,
        video: {
          id: action.payload.id,
          avatar: action.payload.avatar,
          callerId: action.payload.callerId,
          number: action.payload.number,
          countdown: action.payload.countdown,
          incomingVideo: action.payload.incomingVideo,
          outgoingVideo: action.payload.outgoingVideo,
          createdAt: action.payload.createdAt,
        } as VideoModal,
      };
    }
    case CLEAR_VIDEO_SCHEDULE: {
      return {
        ...state,
        video: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default ScheduleReducer;
