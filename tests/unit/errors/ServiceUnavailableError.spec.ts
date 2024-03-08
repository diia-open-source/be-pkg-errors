import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType, ServiceUnavailableError } from '../../../src'

describe('ServiceUnavailableError', () => {
    it('should create error', () => {
        const message = 'message'
        const processCode = 1313
        const errorType = ErrorType.Operated

        const res = new ServiceUnavailableError(message, processCode, errorType)

        expect(res.getMessage()).toEqual(message)
        expect(res.getCode()).toEqual(processCode)
        expect(res.getData()).toEqual({ processCode, code: HttpStatusCode.SERVICE_UNAVAILABLE })
        expect(res.getType()).toEqual(errorType)
        expect(res.getName()).toBe('Error')
    })

    it('should create error with default message and code', () => {
        const res = new ServiceUnavailableError()

        expect(res.getMessage()).toBe('Service unavailable')
        expect(res.getCode()).toEqual(HttpStatusCode.SERVICE_UNAVAILABLE)
    })
})
