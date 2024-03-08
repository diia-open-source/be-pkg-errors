import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType } from '../interfaces'

import { ApiError } from './ApiError'

export class NotFoundError extends ApiError {
    constructor(message = 'Not found', processCode?: number, type?: ErrorType) {
        super(message, HttpStatusCode.NOT_FOUND, {}, processCode, type)
    }
}
