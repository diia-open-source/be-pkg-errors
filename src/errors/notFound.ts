/* eslint-disable unicorn/custom-error-definition */
import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType } from '../interfaces/index.js'
import { ApiError } from './apiError.js'

export class NotFoundError extends ApiError {
    constructor(message = 'Not found', processCode?: number, type?: ErrorType) {
        super(message, HttpStatusCode.NOT_FOUND, {}, processCode, type)
    }
}
