import * as actions from '../actions/auth';

const localStorageTheme = localStorage.getItem('theme')
	? JSON.parse(localStorage.getItem('theme')!)
	: 'light';

const initialState: State = {
	themeType: localStorageTheme,
	isAuthenticated: false,
};

export type State = {
	isAuthenticated: boolean;
	themeType: string;
};

export const reducer = (state: State = initialState, action: actions.AuthActionTypes): State => {
	switch (action.type) {
		case actions.LOGIN_SUCCESS: {
			return {
				...state,
				isAuthenticated: true,
			};
		}

		case actions.LOGOUT: {
			return {
				...state,
				isAuthenticated: false,
			};
		}

		case actions.THEME_TYPE: {
			const { themeType } = state;
			return {
				...state,
				themeType: themeType === 'dark' ? 'light' : 'dark',
			};
		}

		default: {
			return state;
		}
	}
};
