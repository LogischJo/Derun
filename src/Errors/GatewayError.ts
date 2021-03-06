export class GatewayError extends Error {
    constructor(shardId: number, code: string | number, reason: string) {
        super(`[Shard ${shardId}] [${code ?? 4000}] ${reason}${reason.endsWith('.') ? '' : '.'}`)
        this.name = this.constructor.name
        // Error.captureStackTrace(this, this.constructor)
    }

    #toString() {
        return `[${this.name}]`
    }

    #toJSON() {
        return {
            message: this.message,
            name: this.name,
            stack: this.stack
        }
    }
}
