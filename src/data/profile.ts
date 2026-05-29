import profileData from './profile.json';

export interface Profile {
  name: string;
  handle: string;
  claim: string[];
  tagline: string;
  location: string;
  avatar?: string;
  footerStatement: string;
  initials: string;
}

export const profile: Profile = profileData as Profile;
