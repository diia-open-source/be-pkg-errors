/* eslint-disable unicorn/custom-error-definition */
import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorData, ErrorType } from '../interfaces'

import { ApiError } from './apiError'

export class AccessDeniedError extends ApiError {
    constructor(message?: string, data?: ErrorData, processCode?: number, type?: ErrorType) {
        super(message || 'Forbidden', HttpStatusCode.FORBIDDEN, data, processCode, type)
    }
}
