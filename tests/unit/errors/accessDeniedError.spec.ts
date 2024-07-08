import { HttpStatusCode } from '@diia-inhouse/types'

import { AccessDeniedError, ErrorType } from '../../../src'

describe('AccessDeniedError', () => {
    it('should create error', () => {
        const message = 'message'
        const data = {
            errorData: 'errorData',
        }
        const processCode = 1313
        const errorType = ErrorType.Operated
        const res = new AccessDeniedError(message, data, processCode, errorType)

        expect(res.getCode()).toEqual(processCode)
        expect(res.getData()).toEqual({ ...data, processCode, code: HttpStatusCode.FORBIDDEN })
        expect(res.getMessage()).toEqual(message)
        expect(res.getType()).toEqual(errorType)
    })

    it('should create error with default message and code', () => {
        const res = new AccessDeniedError()

        expect(res.getMessage()).toBe('Forbidden')
        expect(res.getCode()).toEqual(HttpStatusCode.FORBIDDEN)
    })
})
