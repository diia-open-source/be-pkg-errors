import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType } from '../interfaces'

import { ApiError } from './ApiError'

export interface ValidationErrorField {
    type: string
    message: string
    field: string
}

export class ValidationError extends ApiError {
    constructor(data: ValidationErrorField[] | null = null, processCode?: number, type?: ErrorType) {
        super('Parameter validation error', HttpStatusCode.UNPROCESSABLE_ENTITY, { errors: data }, processCode, type)
    }
}
