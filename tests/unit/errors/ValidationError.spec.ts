import { HttpStatusCode } from '@diia-inhouse/types'

import { ErrorType, ValidationError, ValidationErrorField } from '../../../src'

describe('ValidationError', () => {
    it('should create error', () => {
        const errors: ValidationErrorField[] = [
            {
                type: 'validationErrorType',
                message: 'message',
                field: 'field',
            },
        ]
        const processCode = 1313
        const errorType = ErrorType.Operated

        const res = new ValidationError(errors, processCode, errorType)

        expect(res.getMessage()).toBe('Parameter validation error')
        expect(res.getCode()).toEqual(processCode)
        expect(res.getData()).toEqual({ processCode, errors, code: HttpStatusCode.UNPROCESSABLE_ENTITY })
        expect(res.getType()).toEqual(errorType)
        expect(res.getName()).toBe('Error')
    })

    it('should create error with default code and data', () => {
        const res = new ValidationError()

        expect(res.getCode()).toEqual(HttpStatusCode.UNPROCESSABLE_ENTITY)
        expect(res.getData()).toEqual({ errors: null })
    })
})
