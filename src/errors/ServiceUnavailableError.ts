import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType } from '../interfaces'

import { ApiError } from './ApiError'

export class ServiceUnavailableError extends ApiError {
    constructor(message = 'Service unavailable', processCode?: number, type?: ErrorType) {
        super(message, HttpStatusCode.SERVICE_UNAVAILABLE, {}, processCode, type)
    }
}
