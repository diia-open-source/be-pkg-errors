/* eslint-disable unicorn/custom-error-definition */
import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorData, ErrorType } from '../interfaces/index.js'
import { ApiError } from './apiError.js'

export class UnprocessableEntityError extends ApiError {
    constructor(message: string, data?: ErrorData, processCode?: number, type?: ErrorType) {
        super(message || 'Unprocessable Entity', HttpStatusCode.UNPROCESSABLE_ENTITY, data, processCode, type)
    }
}
