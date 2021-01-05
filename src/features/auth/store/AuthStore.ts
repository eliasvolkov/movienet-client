import { flow, types } from 'mobx-state-tree';
import { SignInBody, SignUpBody } from '../../../types/auth';
import { postSignIn, postSignUp } from '../api/post';

export const AuthStore = types
    .model('AuthStore', {
        token: '',
        loading: false,
        name: '',
        email: '',
        password: '',
    })
    .actions((self) => ({
        signUp: flow(function* (values: SignUpBody, onSuccess: () => void) {
            try {
                self.loading = true;
                yield postSignUp(values);
                self.email = values.email;
                self.password = values.password;
                onSuccess();
            } catch (error) {
                self.loading = false;
                console.log(error);
            }
        }),
        signIn: flow(function* (values: SignInBody, onSuccess: () => void) {
            try {
                self.loading = true;
                const { token } = yield postSignIn(values);
                self.token = token;
                onSuccess();
            } catch (error) {
                self.loading = false;
                console.log(error);
            }
        }),
    }))
    .views((self) => ({
        get initialValues() {
            return {
                email: self.email,
                password: self.password,
            };
        },
    }));
