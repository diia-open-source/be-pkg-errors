import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType, ServiceConfigurationError } from '../../../src'

describe('ServiceConfigurationError', () => {
    it('should create error', () => {
        const message = 'message'
        const processCode = 1313
        const errorType = ErrorType.Operated

        const res = new ServiceConfigurationError(message, processCode, errorType)

        expect(res.getMessage()).toBe(`Configuration error: ${message}`)
        expect(res.getCode()).toEqual(processCode)
        expect(res.getData()).toEqual({ processCode, code: HttpStatusCode.INTERNAL_SERVER_ERROR })
        expect(res.getType()).toEqual(errorType)
        expect(res.getName()).toBe('Error')
    })

    it('should create error with default code', () => {
        const message = 'message'
        const res = new ServiceConfigurationError(message)

        expect(res.getCode()).toEqual(HttpStatusCode.INTERNAL_SERVER_ERROR)
    })
})
