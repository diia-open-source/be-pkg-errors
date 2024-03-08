import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorData, ErrorType } from '../interfaces'

import { ApiError } from './ApiError'

export class BadRequestError extends ApiError {
    constructor(message: string, data?: ErrorData, processCode?: number, type?: ErrorType) {
        super(message || 'Bad request', HttpStatusCode.BAD_REQUEST, data, processCode, type)
    }
}
