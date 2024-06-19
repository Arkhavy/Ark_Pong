import {errmsg} from "./error";

interface	iCoord
{
	x: number;
	y: number;
}

interface	iCanvas
{
	divEl: HTMLDivElement | null;
	canvasEl: HTMLCanvasElement | null;
	ctx: CanvasRenderingContext2D | null;
	divStyle: CSSStyleDeclaration | null;
	divElBorderWidth: number[] | null;
}

const	canvas: iCanvas =
{
	divEl: null,
	canvasEl: null,
	ctx: null,
	divStyle: null,
	divElBorderWidth: null
};

function	initCanvas(): void
{
	// div element around canvas
	canvas.divEl = document.getElementById("divEl") as HTMLDivElement | null;
	if (!canvas.divEl || canvas.divEl === undefined)
		throw new Error(errmsg.divEl);

	// canvas element
	canvas.canvasEl = document.getElementById("canvasEl") as HTMLCanvasElement | null;
	if (!canvas.canvasEl || canvas.canvasEl === undefined)
		throw new Error(errmsg.canvasEl);

	// defining 2D or 3D for canvas
	canvas.ctx = canvas.canvasEl.getContext("2d") as CanvasRenderingContext2D | null;
	if (!canvas.ctx || canvas.ctx === undefined)
		throw new Error(errmsg.ctx);

	// Getting style of div element around canvas, for border width
	canvas.divStyle = window.getComputedStyle(canvas.divEl);
	if (!canvas.divStyle || canvas.divStyle === undefined)
		throw new Error(errmsg.divStyle);

	canvas.divElBorderWidth = [];
	if (!canvas.divElBorderWidth || canvas.divElBorderWidth === undefined)
		throw new Error(errmsg.numtab);

	canvas.divElBorderWidth.push(parseInt(canvas.divStyle.borderTopWidth) || 0);
	canvas.divElBorderWidth.push(parseInt(canvas.divStyle.borderBottomWidth) || 0);
	canvas.divElBorderWidth.push(parseInt(canvas.divStyle.borderLeftWidth) || 0);
	canvas.divElBorderWidth.push(parseInt(canvas.divStyle.borderRightWidth) || 0);

	// Setting canvas size according on div size and its border
	canvas.canvasEl.height = canvas.divEl.offsetHeight - (canvas.divElBorderWidth[0] + canvas.divElBorderWidth[1]);
	canvas.canvasEl.width = canvas.divEl.offsetWidth - (canvas.divElBorderWidth[2] + canvas.divElBorderWidth[3]);
}
