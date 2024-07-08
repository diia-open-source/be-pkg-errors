import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType, ExternalCommunicatorError } from '../../../src'

describe('ExternalCommunicatorError', () => {
    it('should create error', () => {
        const message = 'message'
        const data = {
            errorData: 'errorData',
        }
        const code = HttpStatusCode.OK
        const errorType = ErrorType.Operated
        const res = new ExternalCommunicatorError(message, code, data, errorType)

        expect(res.getCode()).toEqual(code)
        expect(res.getData()).toEqual(data)
        expect(res.getMessage()).toEqual(message)
        expect(res.getType()).toEqual(errorType)
        expect(res.getName()).toBe('ExternalCommunicatorError')
    })

    it('should create error with default message', () => {
        const res = new ExternalCommunicatorError('', HttpStatusCode.GATEWAY_TIMEOUT)

        expect(res.getMessage()).toBe('External communicator error')
    })
})
