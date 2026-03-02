import { HttpStatusCode } from '@diia-inhouse/types'

import { ApiError, ErrorType } from '../../../src'

describe('ApiError', () => {
    it('should create error', () => {
        const code = HttpStatusCode.BAD_REQUEST
        const res = new ApiError('', code)

        expect(res.getCode()).toEqual(code)
        expect(res.getData()).toEqual({})
        expect(res.getMessage()).toBe('Something went wrong. Please try again.')
        expect(res.getType()).toEqual(ErrorType.Unoperated)
        expect(res.getName()).toBe('Error')
    })

    it('should create error with custom message', () => {
        const message = 'message'
        const res = new ApiError(message, HttpStatusCode.BAD_REQUEST)

        expect(res.getMessage()).toEqual(message)
    })

    it('should create error with metadata', () => {
        const opOriginalError = { type: ErrorType.Operated }
        const data = { errorData: 'errorData', opOriginalError }
        const res = new ApiError('', HttpStatusCode.BAD_REQUEST, data)

        expect(res.getData()).toEqual(data)
    })

    it('should create error with metadata and process code', () => {
        const opOriginalError = { type: ErrorType.Operated }
        const data = { errorData: 'errorData', opOriginalError }
        const processCode = 1313
        const code = HttpStatusCode.BAD_REQUEST
        const res = new ApiError('', code, data, processCode)

        expect(res.getData()).toEqual({ ...data, processCode, code })
        expect(res.getCode()).toEqual(code)
        expect(res.getType()).toEqual(ErrorType.Unoperated)
    })

    it('should create error with custom type', () => {
        const opOriginalError = { type: ErrorType.Operated }
        const data = { opOriginalError }
        const processCode = 1313
        const errorType = 'customType'
        const code = HttpStatusCode.BAD_REQUEST
        const res = new ApiError('', code, data, processCode, errorType as ErrorType)

        expect(res.getData()).toEqual({ processCode, code, opOriginalError })
        expect(res.getCode()).toEqual(code)
        expect(res.getType()).toEqual(errorType)
    })

    it('should create error when process code provided in data', () => {
        const processCode = 1313
        const opOriginalError = { type: ErrorType.Operated }
        const data = { processCode, opOriginalError }
        const code = HttpStatusCode.BAD_REQUEST
        const res = new ApiError('', code, data)

        expect(res.getData()).toEqual({ processCode, code, opOriginalError })
        expect(res.getCode()).toEqual(code)
    })
})
