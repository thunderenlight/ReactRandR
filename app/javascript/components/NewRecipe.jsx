import React from "react";
import { Link } from  "react-router-dom";

class  NewRecipe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			ingredients: "",
			instruction: ""
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
	}

	stripHtmlEntities(str) {
		return String(str)
			.replace(/</g, "&lt;")
			.replace(/>/g, "&lt;")
	}

	onChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	onSubmit(event) {
		event.preventDefault();
		const url = "/api/v1/recipes/create";
		const { name, ingredients, instruction } = this.state;

		if (name.length == 0 || ingredients.length == 0 || instruction.length == 0)
			return;

		const body = {
			name,
			ingredients,
			instruction: instruction.replace(/\n/g, "<br><br>")
		};

		const token = document.querySelector('meta[name="csft-token"]').content;
		fetch(url, {
			method: "POST",
			headers: {
				"",
				"",
			}
		})
	}
}

export default NewRecipe;