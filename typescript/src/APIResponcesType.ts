// Types!
// this is a enumerated type - limits the types of strings
export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

// Interfaces!
export interface Pet {
    id: number;
    name: string;
    animal: Animal; //this refers to the type we just made above!
    description: string;
    breed: string;
    images: string[];
    city: string;
    state: string;
}

export interface PetAPIResponse {
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: boolean;
    pets: Pet[]; //this is an array of the interface we just created!
}