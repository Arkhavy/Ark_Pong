const	divEl: HTMLDivElement | null = document.getElementById("divEl") as HTMLDivElement | null; // div element around canvas
if (!divEl)
	throw new Error("PONG ERROR: could not load game environment from start\nCause: HTMLDivElement === NULL");
const	canvasEl: HTMLCanvasElement | null = document.getElementById("canvasEl") as HTMLCanvasElement | null; // canvas element
if (!canvasEl)
	throw new Error("PONG ERROR: could not load game environment from start\nCause: HTMLCanvasElement === NULL");
const	ctx: CanvasRenderingContext2D | null = canvasEl.getContext("2d") as CanvasRenderingContext2D | null; // defining 2D for canvas
if (!ctx)
	throw new Error("PONG ERROR: could not load game environment from start\nCause: CanvasRenderingContext2D === NULL");

// Getting style of div element around canvas, for border width
const	divStyle: CSSStyleDeclaration = window.getComputedStyle(divEl);
const	divElBorderWidth: number[] = [];
divElBorderWidth.push(parseInt(divStyle.borderTopWidth) || 0);
divElBorderWidth.push(parseInt(divStyle.borderBottomWidth) || 0);
divElBorderWidth.push(parseInt(divStyle.borderLeftWidth) || 0);
divElBorderWidth.push(parseInt(divStyle.borderRightWidth) || 0);

// Setting canvas size according on div size and its border
canvasEl.height = divEl.offsetHeight - (divElBorderWidth[0] + divElBorderWidth[1]);
canvasEl.width = divEl.offsetWidth - (divElBorderWidth[2] + divElBorderWidth[3]);