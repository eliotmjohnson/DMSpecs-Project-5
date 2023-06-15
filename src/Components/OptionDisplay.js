import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLoadingState } from "../redux/slices/loadingSlice";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
	const dispatch = useDispatch();
	const loading = useSelector(selectLoadingState);
	let currentPotentials = useSelector(selectPotentials);

	return (
		<div className="stack">
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<>
					{currentPotentials.map((e, i) => {
						return (
							<h2
								key={e.name.official}
								className="country-option"
								onClick={(e) => {
									dispatch(setDisplayCountry(currentPotentials[i]));
								}}
							>
								{e.name.common}
							</h2>
						);
					})}
				</>
			)}
		</div>
	);
};

export default OptionDisplay;
