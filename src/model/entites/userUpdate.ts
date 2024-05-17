export interface UserUpdateInterface {
  userName: string;
  lastName: string;
  firstName: string;
  description: string;
  address: string;
  backgroundUrl: string;
  avatarUrl: string;
  experienceId: string;
  positionIds: Array<string>;
  competitionLevelId: string;
}
