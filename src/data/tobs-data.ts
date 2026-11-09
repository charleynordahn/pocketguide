export const tobsData = [
	{
		id: "pulse",
		observation: "Puls",
		values: [
			{ value: "≥ 130", score: 3 },
			{ value: "110-129", score: 2 },
			{ value: "90-109", score: 1 },
			{ value: "50-89", score: 0 },
			{ value: "40-49", score: 1 },
			{ value: "≤ 39", score: 2 },
		],
	},

	{
		id: "consciousness",
		observation: "Bevidsthed",
		values: [
			{ value: "Agiteret", score: 1 },
			{ value: "Habituel", score: 0 },
			{ value: "Reagerer kun på tiltale", score: 1 },
			{ value: "Reagerer kun på smerte", score: 2 },
			{ value: "Ingen reaktion", score: 3 },
		],
	},

	{
		id: "temperature",
		observation: "Temperatur",
		values: [
			{ value: "≥ 40", score: 3 },
			{ value: "39-39,9", score: 2 },
			{ value: "38-38,9", score: 1 },
			{ value: "36-37,9", score: 0 },
			{ value: "34-35,9", score: 2 },
			{ value: "≤ 33,9", score: 3 },
		],
	},

	{
		id: "respiration",
		observation: "Respiration",
		values: [
			{ value: "≥ 25", score: 3 },
			{ value: "21-24", score: 2 },
			{ value: "12-20", score: 0 },
			{ value: "9-11", score: 1 },
			{ value: "≤ 8", score: 3 },
		],
	},

	{
		id: "blood_pressure",
		observation: "Systolisk blodtryk",
		values: [
			{ value: "≥ 200", score: 2 },
			{ value: "100-199", score: 0 },
			{ value: "80-99", score: 1 },
			{ value: "70-79", score: 2 },
			{ value: "≤ 69", score: 3 },
		],
	},
];
