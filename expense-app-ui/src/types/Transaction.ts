import { UUID } from "./common"

export type Transaction = {
    id: UUID,
    description: string,
    amount: number,
    from: UUID,
    to: UUID,
    time: Date,
}

export type TransactionRequest = Omit<Omit<Transaction, "id">, "time">