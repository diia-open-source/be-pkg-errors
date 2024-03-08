import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType, RequestTimeoutError } from '../../../src'

describe('RequestTimeoutError', () => {
    it('should create error', () => {
        const message = 'message'
        const processCode = 1313
        const errorType = ErrorType.Operated

        const res = new RequestTimeoutError(message, processCode, errorType)

        expect(res.getMessage()).toEqual(message)
        expect(res.getCode()).toEqual(processCode)
        expect(res.getData()).toEqual({ processCode, code: HttpStatusCode.REQUEST_TIMEOUT })
        expect(res.getType()).toEqual(errorType)
        expect(res.getName()).toBe('Error')
    })

    it('should create error with default mesasge and code', () => {
        const res = new RequestTimeoutError()

        expect(res.getMessage()).toBe('Request Timeout')
        expect(res.getCode()).toEqual(HttpStatusCode.REQUEST_TIMEOUT)
    })
})
