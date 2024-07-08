/* eslint-disable unicorn/custom-error-definition */
import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType } from '../interfaces'

import { ApiError } from './apiError'

export class RequestTimeoutError extends ApiError {
    constructor(message = 'Request Timeout', processCode?: number, type?: ErrorType) {
        super(message, HttpStatusCode.REQUEST_TIMEOUT, {}, processCode, type)
    }
}
