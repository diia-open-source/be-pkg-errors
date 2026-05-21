/* eslint-disable unicorn/custom-error-definition */
import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType } from '../interfaces/index.js'
import { ApiError } from './apiError.js'

export class DocumentNotFoundError extends ApiError {
    constructor(message = 'Document not found', processCode?: number, type?: ErrorType) {
        super(message, HttpStatusCode.NOT_FOUND, {}, processCode, type)
    }
}
