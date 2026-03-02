import { OpOriginalError } from './opOriginalError'

export interface ErrorData {
    [key: string]: unknown
    processCode?: number
    code?: number
    errors?: unknown
    opOriginalError?: OpOriginalError
}
