import qrcode from "qrcode";

chrome.runtime.onMessage.addListener(async (msg: OffscreenMessage) => {
	if (!msg.offscreen) return;

	switch (msg.type) {
		case "qrcode":
			try {
				const canvas = document.createElement("canvas");
				canvas.style.cssText = "visibility:hidden;";
				document.body.appendChild(canvas);
				await qrcode.toCanvas(canvas, window.location.href);
				console.log("111111111111111111");

				canvas.toBlob(
					function (blob) {
						if (!blob) return;
						navigator.clipboard.write([
							new ClipboardItem({
								[blob.type]: blob,
							}),
						]);
					},
					"image/png",
					0.8
				);
			} catch (error) {
				console.log(error);
			}
			break;
		default:
	}
});
