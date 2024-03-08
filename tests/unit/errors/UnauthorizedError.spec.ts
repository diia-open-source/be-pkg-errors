import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType, UnauthorizedError } from '../../../src'

describe('UnauthorizedError', () => {
    it('should create error', () => {
        const message = 'message'
        const processCode = 1313
        const errorType = ErrorType.Operated

        const res = new UnauthorizedError(message, processCode, errorType)

        expect(res.getMessage()).toEqual(message)
        expect(res.getCode()).toEqual(processCode)
        expect(res.getData()).toEqual({ processCode, code: HttpStatusCode.UNAUTHORIZED })
        expect(res.getType()).toEqual(errorType)
        expect(res.getName()).toBe('Error')
    })

    it('should create error with default message and code', () => {
        const res = new UnauthorizedError()

        expect(res.getMessage()).toBe('Not authorized')
        expect(res.getCode()).toEqual(HttpStatusCode.UNAUTHORIZED)
    })
})
