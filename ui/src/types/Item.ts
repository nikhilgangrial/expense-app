import { UUID } from "./common";

export type Item = {
    id: UUID,
    transaction: UUID,
    name: string,
    rate: number,
    quantity: number,
}

export type ItemRequest = Omit<Item, "id">