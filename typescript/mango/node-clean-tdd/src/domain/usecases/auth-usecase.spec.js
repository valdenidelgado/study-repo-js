const {MissingParamError} = require("../../utils/errors")

const makeSut = () => {
    return new AuthUseCase();
}

class AuthUseCase {
    async auth(email, password) {
        if (!email) {
            throw new MissingParamError('email');
        }

        if (!password) {
            throw new MissingParamError('password');
        }
    }
}

describe('Auth UseCase', function () {
    it('should throw if no email is provided',  () => {
        const sut = makeSut();
        const promise = sut.auth();
        expect(promise).rejects.toThrow(new MissingParamError('email'));
    });

    it('should throw if no password is provided', () => {
        const sut = new AuthUseCase();
        const promise =  sut.auth('any_email@mail.com');
        expect(promise).rejects.toThrow(new MissingParamError('password'));
    });
});