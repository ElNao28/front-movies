import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const passwordMatchValidation = (
  pssOne: string,
  pssTwo: string
): ValidatorFn => {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const fieldOne = formGroup.get(pssOne)?.value;
    const fieldTwo = formGroup.get(pssTwo)?.value;

    if (fieldOne !== fieldTwo) {
      formGroup.get(pssTwo)?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    formGroup.get(pssTwo)?.setErrors(null);
    return null;
  };
};

export { passwordMatchValidation };
