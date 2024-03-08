import { HttpStatusCode } from '@diia-inhouse/types'

import { BadRequestError, ErrorType } from '../../../src'

describe('BadRequestError', () => {
    it('should create error', () => {
        const message = 'message'
        const data = {
            errorData: 'errorData',
        }
        const processCode = 1313
        const errorType = ErrorType.Operated
        const res = new BadRequestError(message, data, processCode, errorType)

        expect(res.getCode()).toEqual(processCode)
        expect(res.getData()).toEqual({ ...data, processCode, code: HttpStatusCode.BAD_REQUEST })
        expect(res.getMessage()).toEqual(message)
        expect(res.getType()).toEqual(errorType)
    })

    it('should create error with default message and code', () => {
        const res = new BadRequestError('')

        expect(res.getMessage()).toBe('Bad request')
        expect(res.getCode()).toEqual(HttpStatusCode.BAD_REQUEST)
    })
})
