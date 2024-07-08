/* eslint-disable unicorn/custom-error-definition */
import { ErrorData, ErrorType } from '../interfaces'

export class ApiError extends Error {
    private type: ErrorType = ErrorType.Unoperated

    private data: ErrorData

    constructor(
        message: string,
        private code: number,
        data: ErrorData = {},
        processCodeParam?: number,
        type?: ErrorType,
    ) {
        super()

        this.data = { ...data }
        const processCode = processCodeParam ?? data.processCode
        if (processCode) {
            this.data.processCode = processCode
            this.data.code ??= code
            this.code = processCode
            this.type = type || ErrorType.Unoperated
        }

        if (!message) {
            message = 'Something went wrong. Please try again.'
        }

        this.message = message
        if (type) {
            this.type = type
        }
    }

    getCode(): number {
        return this.code
    }

    getData(): ErrorData {
        return this.data
    }

    getName(): string {
        return this.name
    }

    getMessage(): string {
        return this.message
    }

    getType(): ErrorType {
        return this.type
    }

    setProcessCode(processCode: number): void {
        this.data ??= {}
        this.data.processCode = processCode
        this.code = processCode
    }
}
