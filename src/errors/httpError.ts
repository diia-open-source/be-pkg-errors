/* eslint-disable unicorn/custom-error-definition */
import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType } from '../interfaces'

import { ApiError } from './apiError'

export class HttpError extends ApiError {
    constructor(message: string, code: number = HttpStatusCode.INTERNAL_SERVER_ERROR, processCode?: number, type?: ErrorType) {
        super(`Configuration error: ${message}`, code, {}, processCode, type)
    }
}
