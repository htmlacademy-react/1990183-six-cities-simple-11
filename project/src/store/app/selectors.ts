import { State } from '../../types/state';

export const checkHeaderNavigation = (state: State) => state.app.hasHeaderNavigation;
