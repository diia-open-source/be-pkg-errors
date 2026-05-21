import { OpOriginalError } from './opOriginalError.js'

export interface ErrorData {
    [key: string]: unknown
    processCode?: number
    code?: number
    errors?: unknown
    opOriginalError?: OpOriginalError
}
