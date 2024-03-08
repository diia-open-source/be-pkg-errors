import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType, NotFoundError } from '../../../src'

describe('NotFoundError', () => {
    it('should create error', () => {
        const message = 'message'
        const processCode = 1313
        const errorType = ErrorType.Operated

        const res = new NotFoundError(message, processCode, errorType)

        expect(res.getMessage()).toEqual(message)
        expect(res.getCode()).toEqual(processCode)
        expect(res.getData()).toEqual({ processCode, code: HttpStatusCode.NOT_FOUND })
        expect(res.getType()).toEqual(errorType)
        expect(res.getName()).toBe('Error')
    })

    it('should create error with default mesasge and code', () => {
        const res = new NotFoundError()

        expect(res.getMessage()).toBe('Not found')
        expect(res.getCode()).toEqual(HttpStatusCode.NOT_FOUND)
    })
})
