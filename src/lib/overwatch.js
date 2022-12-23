import { writable } from 'svelte/store';

export const heroList = [
	{ id: 1, heroClass: 'support', name: 'Vertig', image: 'vertigo.png', description: 'Lox' },
	{ id: 2, heroClass: 'dps', name: 'Rion', image: 'rion.jpg', description: 'Сидит без света' },
	{ id: 3, heroClass: 'dps', name: 'Virus', image: 'birus.jpg', description: 'Спурдилеев' },
	{ id: 4, heroClass: 'tank', name: 'HB', image: 'hb.png', description: 'Hop on palladins' },
	{
		id: 5,
		heroClass: 'dps',
		name: 'Heatwave',
		image: 'heatwave.jpg',
		description: 'Ветеран Мариуполя'
	},
	{ id: 6, heroClass: 'support', name: 'Zang', image: 'zang.png', description: 'Спит' },
	{ id: 7, heroClass: 'tank', name: 'Inked', image: 'inked.jpg', description: 'Кто это' },
	{ id: 8, heroClass: 'dps', name: 'Nova', image: 'nova.webp', description: '<Message blocked>' }
];

let _index = -1;
export let selectedHero = writable();
export let selectedHeroIndex = writable(-1);

selectedHeroIndex.subscribe((value) => (_index = value));

export function setActiveHero() {
	if (_index != -1) {
		const hero = heroList.find((item) => item.id === _index);
		if (hero) {
			selectedHero?.set(hero);
		}
	}
}

export function resetPick() {
	_index = -1;
	selectedHeroIndex.set(_index);
	selectedHero.set(null);
}
