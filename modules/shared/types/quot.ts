export interface QuotBike {
  person?: Person;
  bike?: Bike;
}

interface Bike {
  bikeType: string;
  brand: string;
  city: string;
  cost: string;
  purchaseDate: string;
  isProfessional: boolean;
}

interface Person {
  name: string;
  documentType: string;
  document: string;
  phone: string;
  email: string;
}