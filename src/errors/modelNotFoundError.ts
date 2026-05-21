/* eslint-disable unicorn/custom-error-definition */
import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorData, ErrorType } from '../interfaces/index.js'
import { ApiError } from './apiError.js'

export class ModelNotFoundError extends ApiError {
    constructor(resource: string, id: unknown, data?: ErrorData, processCode?: number, type?: ErrorType) {
        super(`The requested model ${resource} ${String(id)} could not be found.`, HttpStatusCode.NOT_FOUND, data, processCode, type)
    }
}
