import { UUID } from "./common";

export type Split = {
    id: UUID,
    for: UUID,
    transaction: UUID,
    amount: number,
    settled: number,
}

export type SplitRequest = Omit<Split, "id">