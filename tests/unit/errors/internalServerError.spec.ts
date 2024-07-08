import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType, InternalServerError } from '../../../src'

describe('InternalServerError', () => {
    it('should create error', () => {
        const message = 'message'
        const processCode = 1313
        const errorType = ErrorType.Operated

        const res = new InternalServerError(message, processCode, errorType)

        expect(res.getMessage()).toEqual(message)
        expect(res.getCode()).toEqual(processCode)
        expect(res.getData()).toEqual({ processCode, code: HttpStatusCode.INTERNAL_SERVER_ERROR })
        expect(res.getType()).toEqual(errorType)
        expect(res.getName()).toBe('Error')
    })

    it('should create error with default mesasge and code', () => {
        const res = new InternalServerError()

        expect(res.getMessage()).toBe('Internal server error')
        expect(res.getCode()).toEqual(HttpStatusCode.INTERNAL_SERVER_ERROR)
    })
})
