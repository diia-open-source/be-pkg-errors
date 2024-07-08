/* eslint-disable unicorn/custom-error-definition */
import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorData, ErrorType } from '../interfaces'

import { ApiError } from './apiError'

export class UnprocessableEntityError extends ApiError {
    constructor(message: string, data?: ErrorData, processCode?: number, type?: ErrorType) {
        super(message || 'Unprocessable Entity', HttpStatusCode.UNPROCESSABLE_ENTITY, data, processCode, type)
    }
}
