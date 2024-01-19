import {
  CLEAR_CALL_SCHEDULE,
  CLEAR_MESSAGE_SCHEDULE,
  CLEAR_VIDEO_SCHEDULE,
  SET_CALL_TASK_SCHEDULE,
  SET_MESSAGE_TASK_SCHEDULE,
  SET_VIDEO_TASK_SCHEDULE,
} from '../../constants/ActionTypes';
import {CallModal, MessagesModal, VideoModal} from '../../types/schedule';

export interface StateTypes {
  call: Array<any> | null;
  video: Array<any> | null;
  messages: Array<any> | null;
}

const initialState: StateTypes = {
  call: null,
  video: null,
  messages: null,
};

const ScheduleReducer = (state: StateTypes = initialState, action: any) => {
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
    case SET_MESSAGE_TASK_SCHEDULE: {
      return {
        ...state,
        messages: {
          id: action.payload.id,
          avatar: action.payload.avatar,
          callerId: action.payload.callerId,
          countdown: action.payload.countdown,
          messages: action.payload.messages,
          recentMessages: action.payload.recentMessages,
          createdAt: action.payload.createdAt,
        } as MessagesModal,
      };
    }
    case CLEAR_MESSAGE_SCHEDULE: {
      return {
        ...state,
        messages: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default ScheduleReducer;
