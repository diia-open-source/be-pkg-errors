/* eslint-disable unicorn/custom-error-definition */
import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType } from '../interfaces/index.js'
import { ApiError } from './apiError.js'

export class InternalServerError extends ApiError {
    constructor(message = 'Internal server error', processCode?: number, type?: ErrorType) {
        super(message, HttpStatusCode.INTERNAL_SERVER_ERROR, {}, processCode, type)
    }
}
