export interface CallModal {
  id: string;
  avatar: string | null;
  callerId: string;
  number: number;
  countdown: string;
  createdAt: string;
}
export interface VideoModal {
  id: string;
  avatar: string | null;
  callerId: string;
  number: number;
  countdown: string;
  incomingVideo: string;
  outgoingVideo: string | null;
  createdAt: string;
}
