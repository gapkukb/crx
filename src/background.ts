let id: number | undefined;

chrome.tabs.onUpdated.addListener(async function (_, __, tab) {
	if (tab.id === id) return;
	id = tab.id;
	// chrome.tabs.query({ active: true, currentWindow: true }, function ([tab]) {
	// 	chrome.tabs.sendMessage(
	// 		tab.id!,
	// 		{
	// 			offscreen: true,
	// 			type: "qrcode",
	// 		},
	// 		function (response) {
	// 			console.log(response);
	// 		}
	// 	);
	// });
	// if (tab.url?.includes("maliprod.alipay.com")) {
	// await chrome.runtime.sendMessage(
	// 	{
	// 		offscreen: true,
	// 		type: "qrcode",
	// 	} as OffscreenMessage,
	// 	() => {
	// 		// chrome.notifications.create({
	// 		// 	type: "basic",
	// 		// 	iconUrl: "/public/148767.png",
	// 		// 	title: `Notification title`,
	// 		// 	message: "Your message",
	// 		// 	priority: 1,
	// 		// 	eventTime: Date.now() + 1 * 1000,
	// 		// });
	// }
	// );
	// }
});

export default function () {
	alert(1);
}
