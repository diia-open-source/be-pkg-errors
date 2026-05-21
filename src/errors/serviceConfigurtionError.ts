/* eslint-disable unicorn/custom-error-definition */
import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType } from '../interfaces/index.js'
import { ApiError } from './apiError.js'

export class ServiceConfigurationError extends ApiError {
    constructor(message: string, processCode?: number, type?: ErrorType) {
        super(`Configuration error: ${message}`, HttpStatusCode.INTERNAL_SERVER_ERROR, {}, processCode, type)
    }
}
