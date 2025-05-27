export interface Master {
  id: string;
  name: string;
}

export interface Insurer extends Master {
  lineHelp: string;
  image: string;
  url: string;
  description: string;
}