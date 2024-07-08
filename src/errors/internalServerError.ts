/* eslint-disable unicorn/custom-error-definition */
import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType } from '../interfaces'

import { ApiError } from './apiError'

export class InternalServerError extends ApiError {
    constructor(message = 'Internal server error', processCode?: number, type?: ErrorType) {
        super(message, HttpStatusCode.INTERNAL_SERVER_ERROR, {}, processCode, type)
    }
}
