import { Component, createApp } from "vue";
const parser = new DOMParser();

let container = document.getElementById("app") as HTMLElement;
if (!container) {
	container = createDomElement(`<div id="app"></div>`);
	document.body.append(container);
}

function createDomElement<TElement extends HTMLElement>(html: string): TElement {
	const element = parser.parseFromString(html, "text/html").body.firstElementChild as TElement | null;
	if (!element) throw new Error("HTML input string does not contain an element");
	return element;
}

export default function newApp(App: Component) {
	return createApp(App).mount(container);
}
