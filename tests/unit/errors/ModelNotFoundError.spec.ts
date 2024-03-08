import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType, ModelNotFoundError } from '../../../src'

describe('ModelNotFoundError', () => {
    it('should create error', () => {
        const resource = 'resource'
        const id = '12345-12345'
        const data = { errorData: 'errorData' }
        const processCode = 1313
        const errorType = ErrorType.Operated

        const res = new ModelNotFoundError(resource, id, data, processCode, errorType)

        expect(res.getMessage()).toBe(`The requested model ${resource} ${id} could not be found.`)
        expect(res.getCode()).toEqual(processCode)
        expect(res.getData()).toEqual({ ...data, processCode, code: HttpStatusCode.NOT_FOUND })
        expect(res.getType()).toEqual(errorType)
        expect(res.getName()).toBe('Error')
    })

    it('should create error with default code', () => {
        const resource = 'resource'
        const id = '12345-12345'
        const res = new ModelNotFoundError(resource, id)

        expect(res.getCode()).toEqual(HttpStatusCode.NOT_FOUND)
    })
})
