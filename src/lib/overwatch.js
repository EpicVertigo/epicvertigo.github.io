import { writable } from 'svelte/store';

export const heroList = [
	{ name: 'Vertig', image: 'vertigo.png', description: 'Lorem Ipsum' },
	{ name: 'Rion', image: 'rion.jpg', description: 'Lorem Ipsum' },
	{ name: 'Virus', image: 'birus.jpg', description: 'Lorem Ipsum' },
	{ name: 'HB', image: 'hb.png', description: 'Lorem Ipsum' },
	{ name: 'Heatwave', image: 'heatwave.jpg', description: 'Lorem Ipsum' },
	{ name: 'Zang', image: 'zang.png', description: 'Lorem Ipsum' },
	{ name: 'Inked', image: 'inked.jpg', description: 'Lorem Ipsum' }
];

let _index = -1;
export let selectedHero = writable();
export let selectedHeroIndex = writable(-1);

selectedHeroIndex.subscribe(value => _index = value)

export function setActiveHero() {
	if (_index != -1) {
		selectedHero.set(heroList[_index]);
	}
}
