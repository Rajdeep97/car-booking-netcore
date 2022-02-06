import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function FullNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    debugger;
    let validatorErrors: errors = {};
    const forbiddenName = /^[a-zA-Z]+$/.test(control.value);
    const characterLimit = String(control.value).length > 75 ? true : false;
    if (forbiddenName) {
      validatorErrors['forbiddenName'] = 'Only A-Z characters are allowed';
    }
    if (characterLimit) {
      validatorErrors['characterLimit'] = 'Can contain max of 75 characters';
    }

    return forbiddenName || characterLimit ? validatorErrors : null;
  };
}

interface errors {
  forbiddenName?: string;
  characterLimit?: string;
}
