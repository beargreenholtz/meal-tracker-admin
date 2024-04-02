import React, { Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';

const Register = React.lazy(() => import('./pages/auth/Register'));

const AppRouter = () => {
	const generealRotues = [
		{
			element: (
				<>
					<Outlet />
				</>
			),
			children: [
				{
					path: '/',
					element: <Register />,
				},
				{
					path: '*',
					element: <Navigate to="/" replace />,
				},
			],
		},
	];

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const authRoutes = [];

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const notAuthRotues = [];

	// const errorElement = {
	// 	errorElement: <NotFound />,
	// };

	const router = createBrowserRouter([...generealRotues]);

	return (
		<Suspense>
			<RouterProvider router={router} />
		</Suspense>
	);
};

export default React.memo(AppRouter);
