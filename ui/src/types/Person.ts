import { UUID } from "./common";

export type Person = {
    id: UUID,
    name: string,
    description: string,
}

export type PersonRequest = Omit<Person, "id">