import { HttpStatusCode } from '@diia-inhouse/types'

import { DatabaseError, ErrorType } from '../../../src'

describe('DatabaseError', () => {
    it('should create error', () => {
        const message = 'message'
        const data = {
            errorData: 'errorData',
        }
        const processCode = 1313
        const errorType = ErrorType.Operated
        const res = new DatabaseError(message, data, processCode, errorType)

        expect(res.getCode()).toEqual(processCode)
        expect(res.getData()).toEqual({ ...data, processCode, code: HttpStatusCode.INTERNAL_SERVER_ERROR })
        expect(res.getMessage()).toEqual(message)
        expect(res.getType()).toEqual(errorType)
    })

    it('should create error with default message and code', () => {
        const res = new DatabaseError('')

        expect(res.getMessage()).toBe('Database error')
        expect(res.getCode()).toEqual(HttpStatusCode.INTERNAL_SERVER_ERROR)
    })
})
