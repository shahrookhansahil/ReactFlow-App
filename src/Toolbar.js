import React from "react";

const Toolbar = () => {
	const onDragStart = (event, nodeType) => {
		event.dataTransfer.setData("application/reactflow", nodeType);
		event.dataTransfer.effectAllowed = "move";
	};

	return (
		<div className="w-full px-4">
			<h1 className="text-2xl font-semibold m-4 underline ">Toolbar</h1>
			<div
				className="bg-white rounded m-4 p-1 border-2 border-black"
				onDragStart={(event) => onDragStart(event, "input")}
				draggable
			>
				Input
			</div>
			<div
				className="bg-white rounded m-4 p-1 border-2 border-black"
				onDragStart={(event) => onDragStart(event, "default")}
				draggable
			>
				Default
			</div>
			<div
				className="bg-white rounded m-4 p-1 border-2 border-black"
				onDragStart={(event) => onDragStart(event, "output")}
				draggable
			>
				Output
			</div>
			<div
				className="bg-white rounded-full h-10 w-10 m-4 p-2 border-2 border-black flex items-center justify-center mx-auto"
				onDragStart={(event) => onDragStart(event, "circle")}
				draggable
			></div>
			<div
				className="bg-white h-10 w-10 border-solid border-r-20 border-t-20 border-b-20 m-4 p-2 border-2 border-black mx-auto"
				onDragStart={(event) => onDragStart(event, "square")}
				draggable
			></div>
			<div
				className="bg-white h-10 w-10 transform rotate-45 m-4 p-2 border-2 border-black  mx-auto"
				onDragStart={(event) => onDragStart(event, "diamond")}
				draggable
			></div>
			<div
				className="bg-white rounded-full h-16 w-10 m-4 p-2 border-2 border-black flex items-center justify-center mx-auto"
				onDragStart={(event) => onDragStart(event, "cylinder")}
				draggable
			></div>
		</div>
	);
};

export default Toolbar;
