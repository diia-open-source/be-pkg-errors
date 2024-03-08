import { HttpStatusCode } from '@diia-inhouse/types'

import { ApiError, ErrorType } from '../../../src'

describe('ApiError', () => {
    it('should create error', () => {
        const res = new ApiError('', HttpStatusCode.ACCEPTED)

        expect(res.getCode()).toEqual(HttpStatusCode.ACCEPTED)
        expect(res.getData()).toEqual({})
        expect(res.getMessage()).toBe('Something went wrong. Please try again.')
        expect(res.getType()).toEqual(ErrorType.Unoperated)
        expect(res.getName()).toBe('Error')
    })

    it('should create error with custom message', () => {
        const message = 'message'
        const res = new ApiError(message, HttpStatusCode.ACCEPTED)

        expect(res.getMessage()).toEqual(message)
    })

    it('should create error with metadata', () => {
        const data = { errorData: 'errorData' }
        const res = new ApiError('', HttpStatusCode.ACCEPTED, data)

        expect(res.getData()).toEqual(data)
    })

    it('should create error with metadata and process code', () => {
        const data = { errorData: 'errorData' }
        const processCode = 1313
        const res = new ApiError('', HttpStatusCode.ACCEPTED, data, processCode)

        expect(res.getData()).toEqual({ ...data, processCode, code: HttpStatusCode.ACCEPTED })
        expect(res.getCode()).toEqual(processCode)
        expect(res.getType()).toEqual(ErrorType.Unoperated)
    })

    it('should create error with custom type', () => {
        const data = {}
        const processCode = 1313
        const errorType = 'customType'
        const res = new ApiError('', HttpStatusCode.ACCEPTED, data, processCode, <ErrorType>errorType)

        expect(res.getData()).toEqual({ processCode, code: HttpStatusCode.ACCEPTED })
        expect(res.getCode()).toEqual(processCode)
        expect(res.getType()).toEqual(errorType)
    })

    it('should create error when process code provided in data', () => {
        const processCode = 1313
        const data = { processCode }
        const res = new ApiError('', HttpStatusCode.ACCEPTED, data)

        expect(res.getData()).toEqual({ processCode, code: HttpStatusCode.ACCEPTED })
        expect(res.getCode()).toEqual(processCode)
    })
})
