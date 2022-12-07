import { ProfileInfo } from "./profile-info-data.model";

export interface ProfileInfoSection {
  img: string,
  name: string,
  About: ProfileInfo,
  Contact: ProfileInfo,
  Portfolio: ProfileInfo
}
