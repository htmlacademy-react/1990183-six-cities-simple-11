import { State } from '../../types/state';

export const getHeaderNavigationAvailability = (state: State) => state.app.hasHeaderNavigation;
