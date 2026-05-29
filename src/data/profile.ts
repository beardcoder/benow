import profileData from './profile.json';

export interface Profile {
  name: string;
  handle: string;
  claim: string[];
  tagline: string;
  location: string;
  avatar?: string;
  ogImage?: string;
  footerStatement: string;
  footerVersion?: string;
  initials: string;
}

export const profile: Profile = profileData as Profile;
