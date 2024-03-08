import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorData, ErrorType } from '../interfaces'

import { ApiError } from './ApiError'

export class ModelNotFoundError extends ApiError {
    constructor(resource: string, id: unknown, data?: ErrorData, processCode?: number, type?: ErrorType) {
        super(`The requested model ${resource} ${id} could not be found.`, HttpStatusCode.NOT_FOUND, data, processCode, type)
    }
}
