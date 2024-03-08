import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType } from '../interfaces'

import { ApiError } from './ApiError'

export class UnauthorizedError extends ApiError {
    constructor(message?: string, processCode?: number, type?: ErrorType) {
        super(message || 'Not authorized', HttpStatusCode.UNAUTHORIZED, {}, processCode, type)
    }
}
