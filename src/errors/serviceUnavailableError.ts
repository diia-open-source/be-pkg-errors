/* eslint-disable unicorn/custom-error-definition */
import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType } from '../interfaces'

import { ApiError } from './apiError'

/**
 * @deprecated SERVICE_UNAVAILABLE 503 error shouldn't be used in the business logic (API) layer. Use InternalServerError instead
 */
export class ServiceUnavailableError extends ApiError {
    constructor(message = 'Service unavailable', processCode?: number, type?: ErrorType) {
        super(message, HttpStatusCode.SERVICE_UNAVAILABLE, {}, processCode, type)
    }
}
