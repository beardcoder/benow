export interface Profile {
  name: string;
  handle: string;
  claim: string;
  tagline: string;
  location: string;
  avatar?: string;
  footerStatement: string;
  initials: string;
}

export const profile: Profile = {
  name: 'Markus Sommer',
  handle: 'letsbenow',
  claim: 'Be here. Be now.',
  tagline:
    'Webdesigner aus Bayern. Zwischen Code, Atem und Bewegung — gestalte ich Räume, in denen das Digitale wieder menschlich wird.',
  location: 'Bayern · Deutschland',
  initials: 'MS',
  footerStatement:
    'Gebaut mit ruhigem Atem, klarer Linie und einer Tasse Tee. Kein Tracking. Keine Cookies. Nur Präsenz.',
};
