export interface Coverage {
    image?: string;
    id: string;
    name: string;
    description: string;
}

export interface Plan {
    scope: number;
    coverages: Coverage[];
    id: string;
    name: string;
    description: string;
}