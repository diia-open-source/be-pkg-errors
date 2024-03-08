import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType, UnprocessableEntityError } from '../../../src'

describe('UnprocessableEntityError', () => {
    it('should create error', () => {
        const message = 'message'
        const data = { errorData: 'errorData' }
        const processCode = 1313
        const errorType = ErrorType.Operated
        const res = new UnprocessableEntityError(message, data, processCode, errorType)

        expect(res.getCode()).toEqual(processCode)
        expect(res.getData()).toEqual({ ...data, processCode, code: HttpStatusCode.UNPROCESSABLE_ENTITY })
        expect(res.getMessage()).toEqual(message)
        expect(res.getType()).toEqual(errorType)
    })

    it('should create error with default message and code', () => {
        const res = new UnprocessableEntityError('')

        expect(res.getMessage()).toBe('Unprocessable Entity')
        expect(res.getCode()).toEqual(HttpStatusCode.UNPROCESSABLE_ENTITY)
    })
})
