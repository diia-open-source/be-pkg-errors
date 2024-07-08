import { HttpStatusCode } from '@diia-inhouse/types'

import { DocumentNotFoundError, ErrorType } from '../../../src'

describe('DocumentNotFoundError', () => {
    it('should create error', () => {
        const message = 'message'
        const processCode = 1313
        const errorType = ErrorType.Operated
        const res = new DocumentNotFoundError(message, processCode, errorType)

        expect(res.getCode()).toEqual(processCode)
        expect(res.getData()).toEqual({ processCode, code: HttpStatusCode.NOT_FOUND })
        expect(res.getMessage()).toEqual(message)
        expect(res.getType()).toEqual(errorType)
    })

    it('should create error with default message and code', () => {
        const res = new DocumentNotFoundError()

        expect(res.getMessage()).toBe('Document not found')
        expect(res.getCode()).toEqual(HttpStatusCode.NOT_FOUND)
    })
})
