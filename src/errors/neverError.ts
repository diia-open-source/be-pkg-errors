import { HttpStatusCode } from '@diia-inhouse/types'

import { ApiError } from './apiError.js'

export class NeverError extends ApiError {
    name = 'NeverError'

    constructor(value: never, message = `Unexpected value: ${String(value)}`) {
        super(message, HttpStatusCode.INTERNAL_SERVER_ERROR)
    }
}
