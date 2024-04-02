export const LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS';

export const LOGOUT = '[Auth] LOGOUT';

export const THEME_TYPE = '[Theme] THEME_TYPE';

export interface LoginSuccessAction {
	type: typeof LOGIN_SUCCESS;
	payload: {
		isAuthenticated: boolean;
	};
}

export interface LogoutAction {
	type: typeof LOGOUT;
	payload: {
		isAuthenticated: boolean;
	};
}

export interface ThemeAction {
	type: typeof THEME_TYPE;
	payload: {
		themeType: string;
	};
}

export const toggleTheme = (themeType: string): ThemeAction => {
	localStorage.setItem('theme', JSON.stringify(themeType === 'dark' ? 'light' : 'dark'));

	return {
		type: THEME_TYPE,
		payload: { themeType: themeType === 'dark' ? 'light' : 'dark' },
	};
};

export const loginSuccess = (token: string): LoginSuccessAction => {
	localStorage.setItem('jwt_token', JSON.stringify(token));

	return {
		type: LOGIN_SUCCESS,
		payload: { isAuthenticated: true },
	};
};

export const logout = (): LogoutAction => {
	localStorage.removeItem('jwt_token');

	return {
		type: LOGOUT,
		payload: { isAuthenticated: false },
	};
};

export type AuthActionTypes = LoginSuccessAction | LogoutAction | ThemeAction;
