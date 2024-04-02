import { useState } from 'react';

import type { FormErrors, FormFields } from '@/types/input';

const useValidation = (): [() => void, FormErrors, (fields: FormFields) => boolean] => {
	const [errors, setErrors] = useState<FormErrors>({});

	const passowrdvaliteregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;

	const handleValidation = (inputFields: FormFields): boolean => {
		const formFields: FormFields = { ...inputFields };
		const formErrors: FormErrors = {};
		let formIsValid = true;

		if (formFields.email === '') {
			formIsValid = false;
			formErrors.email = 'Cannot be empty';
		}

		if (formFields.email) {
			const lastAtPos: number = formFields.email.lastIndexOf('@');
			const lastDotPos: number = formFields.email.lastIndexOf('.');

			if (
				!(
					lastAtPos < lastDotPos &&
					lastAtPos > 0 &&
					formFields.email.indexOf('@@') === -1 &&
					lastDotPos > 2 &&
					formFields.email.length - lastDotPos > 2
				)
			) {
				formIsValid = false;
				formErrors.email = 'Email is not valid';
			}
		}

		if (formFields.password === '') {
			formIsValid = false;
			formErrors.password = 'Cannot be empty';
		}

		if (formFields.password) {
			if (!formFields.password.match(passowrdvaliteregex)) {
				formIsValid = false;
				formErrors.password =
					'Password must contain at least 8 characters, one uppercase, one lowercase and one special character';
			}
		}

		if (formFields.username === '') {
			formIsValid = false;
			formErrors.username = 'Cannot be empty';
		}

		setErrors(formErrors);

		return formIsValid;
	};

	const resetErrors = () => {
		setErrors({});
	};

	return [resetErrors, errors, handleValidation];
};

export default useValidation;
