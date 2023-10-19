import { Intl, Temporal, toTemporalInstant } from '@js-temporal/polyfill';

interface CalendarOptions {
	state: CalendarState;
	onUpdate: (state: CalendarState) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CalendarState {}

interface WhiskersCalendar {
	state: CalendarState;
}

export class CatCalendar implements WhiskersCalendar {
	public state: CalendarState;

	constructor(public options: CalendarOptions) {
		this.state = options.state;
	}

	private _onUpdate = () => {
		this.options.onUpdate(this.state);
	};
}
