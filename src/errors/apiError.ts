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

    /**
     * Checks if the error type (ApiError.getType()) is an external error.
     */
    isExternal(): boolean {
        return this.type === ErrorType.External
    }

    /**
     * Checks if the original error type (ApiError.getData().opOriginalError?.type) is an external error.
     */
    isOriginalExternal(): boolean {
        return this.data.opOriginalError?.type === ErrorType.External
    }

    /**
     * Checks if the error type (ApiError.getType()) is an operated error.
     */
    isOperated(): boolean {
        return this.type === ErrorType.Operated
    }

    /**
     * Checks if the original error type (ApiError.getData().opOriginalError?.type) is an operated error.
     */
    isOriginalOperated(): boolean {
        return this.data.opOriginalError?.type === ErrorType.Operated
    }

    /**
     * Checks if the error type (ApiError.getType()) is an unoperated error.
     */
    isUnoperated(): boolean {
        return this.type === ErrorType.Unoperated
    }

    /**
     * Checks if the original error type (ApiError.getData().opOriginalError?.type) is an unoperated error.
     */
    isOriginalUnoperated(): boolean {
        return this.data.opOriginalError?.type === ErrorType.Unoperated
    }

    setProcessCode(processCode: number): void {
        this.data ??= {}
        this.data.processCode = processCode
    }

    getProcessCode(): number | undefined {
        return this.data.processCode
    }
}
