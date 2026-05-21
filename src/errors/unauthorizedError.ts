/* eslint-disable unicorn/custom-error-definition */
import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType } from '../interfaces/index.js'
import { ApiError } from './apiError.js'

export class UnauthorizedError extends ApiError {
    constructor(message?: string, processCode?: number, type?: ErrorType) {
        super(message || 'Not authorized', HttpStatusCode.UNAUTHORIZED, {}, processCode, type)
    }
}
