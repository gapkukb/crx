export default async function newOffscreen() {
	if (await chrome.offscreen.hasDocument()) return;
	await chrome.offscreen.createDocument({
		url: "offscreen.html",
		reasons: [chrome.offscreen.Reason.DOM_PARSER],
		justification: "testing",
	});
}
