export interface MenuItem {
  id: string;
  pitchAddress: string;
  maxMatchPlayersNeed: number;
  pitchPrice?: number;
  title: string;
  description: string;
  minPrestigeScore: number;
  startTime: string;
  address: string;
  competitionLevel: string;
  timeAgo?: number;
  hostId: string;
  hostName: string;
  isRegister?: boolean;
  isAccepted?: boolean;
}
