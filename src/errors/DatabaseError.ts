import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorData, ErrorType } from '../interfaces'

import { ApiError } from './ApiError'

export class DatabaseError extends ApiError {
    constructor(message?: string, data?: ErrorData, processCode?: number, type?: ErrorType) {
        super(message || 'Database error', HttpStatusCode.INTERNAL_SERVER_ERROR, data, processCode, type)
    }
}
