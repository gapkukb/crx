import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
const parser = new DOMParser();

let container = document.getElementById("app") as HTMLElement;
if (!container) {
	container = createDomElement(`<div id="app"></div>`);
	document.body.append(container);
}

createApp(App).mount(container);

export function createDomElement<TElement extends HTMLElement>(html: string): TElement {
	const element = parser.parseFromString(html, "text/html").body.firstElementChild as TElement | null;
	if (!element) throw new Error("HTML input string does not contain an element");
	return element;
}
