import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorData, ErrorType } from '../interfaces'

import { ApiError } from './apiError'

export class ExternalCommunicatorError extends ApiError {
    constructor(message: string, code: HttpStatusCode, data?: ErrorData, type?: ErrorType) {
        super(message || 'External communicator error', code, data, undefined, type)
        this.name = 'ExternalCommunicatorError'
    }
}
