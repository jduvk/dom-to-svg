import { elementToSVG, inlineResources } from './lib/index.js'

window.takeSVGScreenshot = async function takeSVGScreenshot(cssSelector){
	const svgDocument = elementToSVG(document.querySelector('camos-html5client').shadowRoot.querySelector(cssSelector));
	await inlineResources(svgDocument.documentElement);
	const svgString = new XMLSerializer().serializeToString(svgDocument);
	callHTMLClient(JSON.stringify({ Sender: "TakeSVGScreenshot", Data: svgString }));
}

if (window.requestSVGScreenshot){
	window.takeSVGScreenshot(window.requestSVGScreenshot);
	delete window.requestSVGScreenshot;
}
