import { CardData } from './card-data.model';
import { Navbar } from './navbar-data.mode';
import { ProfileInfoSection } from "./profile-info-section-data.model";

export interface AppData {
  profileInfo: ProfileInfoSection,
  nav: Navbar,
  card: CardData,
}
