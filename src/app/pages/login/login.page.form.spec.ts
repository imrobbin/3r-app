import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm } from './login.page.form';

describe('LoginPageForm', () => {
  let loginPageForm: LoginPageForm;
  let loginForm: FormGroup;

  beforeEach(() => {
    loginPageForm = new LoginPageForm(new FormBuilder());
    loginForm = loginPageForm.createLoginForm();
  });

  it('should create an empty login form', () => {
    expect(loginForm).not.toBeNull();
    expect(loginForm.get('email')).not.toBeNull();
    expect(loginForm.get('email').value).toEqual('');
    expect(loginForm.get('email').valid).toBeFalsy();

    expect(loginForm.get('password')).not.toBeNull();
    expect(loginForm.get('password').value).toEqual('');
    expect(loginForm.get('password').valid).toBeFalsy();
  });

  it('should have email invalid if email is not valid', () => {
    loginForm.get('email').setValue('invalid.email');
    expect(loginForm.get('email').valid).toBeFalsy();
  });

  it('should have email valid if email is valid', () => {
    loginForm.get('email').setValue('valid@email.com');
    expect(loginForm.get('email').valid).toBeTruthy();
  });

  it('should have valid form if form is valid', () => {
    loginForm.get('email').setValue('valid@email.com');
    loginForm.get('password').setValue('validPassword');
    expect(loginForm.valid).toBeTruthy();
  });
});
