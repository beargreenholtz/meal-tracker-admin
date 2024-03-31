import { useState } from 'react';
import axios from 'axios';

import Svg from '../../../ui/Svg/Svg';
import { RegisterInputs } from '../../../../types/register';
import { Toaster, toast } from 'sonner';

const Register = () => {
	const [loading, setLoading] = useState(false);
	const [inputs, setInputs] = useState<RegisterInputs>({ username: '', password: '' });

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>, inputTarget: keyof RegisterInputs) => {
		setInputs((prev) => ({
			...prev,
			[inputTarget]: e.target.value,
		}));
	};

	const onSubmiteRegsiter = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			const response = await axios.post('http://localhost:3000/user', {
				username: inputs.username,
				password: inputs.password,
			});
			toast.success('', {
				description: 'User was created',
				duration: 2000,
			});
			console.log('POST Response:', response.data);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				toast.error('', {
					description: error.response?.data.error,
					duration: 2000,
				});
			} else {
				toast.error('', {
					description: 'General error',
					duration: 2000,
				});
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-base-100 flex items-center">
			<Toaster richColors />
			<div className="card flex mx-auto w-full max-w-5xl  shadow-xl content-center">
				<div className="grid  md:grid-cols-2 grid-cols-1  bg-base-200 rounded-xl items-center">
					<div className="p-9">
						<Svg name="signup" fill="currentColor"></Svg>
					</div>
					<div className="py-24 px-10">
						<h2 className="text-2xl font-semibold mb-2 text-center">Register</h2>
						<form onSubmit={onSubmiteRegsiter}>
							<div className="flex flex-col mb-4 gap-5">
								<label className="input input-bordered flex items-center gap-2">
									<Svg name="email" className="w-4 h-4 opacity-70" fill="currentColor" />
									<input
										type="text"
										value={inputs.username}
										className="grow"
										placeholder="Email"
										onChange={(e) => onChangeInput(e, 'username')}
									/>
								</label>
								<label className="input input-bordered flex items-center gap-2">
									<Svg name="password" className="w-4 h-4 opacity-70" fill="currentColor" />
									<input
										type="password"
										value={inputs.password}
										className="grow"
										placeholder="Password"
										onChange={(e) => onChangeInput(e, 'password')}
									/>
								</label>
							</div>

							<button
								type="submit"
								disabled={loading}
								className={'btn mt-2 w-full btn-primary' + (loading ? ' btn-disabled  ' : '')}
							>
								Register
							</button>

							<div className="text-center mt-4">
								Already have an account?
								<span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
									Login
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
