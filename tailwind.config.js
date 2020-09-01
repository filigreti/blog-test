module.exports = {
	variants: {
		borderWidth: ["responsive", "last", "hover", "focus", "group-hover"],
	},
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		fontFamily: {
			display: ["Abel"],
			body: ["Open Sans"],
		},
		borderWidth: {
			default: "1px",
			"0": "0",
			"2": "2px",
			"4": "4px",
		},
		extend: {
			colors: {
				cyan: "#9cdbff",
				cream: "#EEECEC",
				hash: "#D3C2A9",
				lynx: "#EBECF0",
			},
			spacing: {
				"70": "18rem",
				"96": "24rem",
				"128": "32rem",
			},
		},
	},
};
