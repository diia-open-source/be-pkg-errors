import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType, HttpError } from '../../../src'

describe('HttpError', () => {
    it('should create error', () => {
        const message = 'message'
        const code = HttpStatusCode.OK
        const processCode = 1313
        const errorType = ErrorType.Operated

        const res = new HttpError(message, code, processCode, errorType)

        expect(res.getMessage()).toBe(`Configuration error: ${message}`)
        expect(res.getCode()).toEqual(processCode)
        expect(res.getData()).toEqual({ processCode, code })
        expect(res.getType()).toEqual(errorType)
        expect(res.getName()).toBe('Error')
    })

    it('should create error with default code', () => {
        const res = new HttpError('message')

        expect(res.getCode()).toEqual(HttpStatusCode.INTERNAL_SERVER_ERROR)
    })
})
