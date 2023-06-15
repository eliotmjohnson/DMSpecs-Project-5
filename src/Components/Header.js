import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deletePotentialCountries,
	setPotentialCountries,
} from "../redux/slices/potentialCountriesSlice";
import { BsFillFlagFill } from "react-icons/bs";
import {
	selectDisplay,
	deleteDisplayCountry,
} from "../redux/slices/displayCountrySlice";
import { setLoading } from "../redux/slices/loadingSlice";

const Header = () => {
	const dispatch = useDispatch();
	const [input, setInput] = useState();
	let currentDisplay = useSelector(selectDisplay);
	return (
		<div className="header">
			<div className="home">
				<BsFillFlagFill style={{ marginRight: "10px" }} fontSize="1.6em" />
				<h3 className="home-country">
					{currentDisplay && currentDisplay.name.common}
				</h3>
			</div>
			<div className="country-input">
				<input
					onChange={(e) => {
						setInput(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						dispatch(setLoading(true));
						axios
							.get(`https://restcountries.com/v3.1/name/${input}`)
							.then((res) => {
								dispatch(deleteDisplayCountry());
								dispatch(deletePotentialCountries(res.data));
								dispatch(setPotentialCountries(res.data));
								dispatch(setLoading(false));
							})
							.catch((err) => {
								alert("No countries found that match your search!");
							});
					}}
				>
					search
				</button>
			</div>
		</div>
	);
};

export default Header;
