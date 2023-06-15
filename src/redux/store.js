import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "./slices/potentialCountriesSlice";
import displayedCounrtyReducer from "./slices/displayCountrySlice";
import loadingReducer from "./slices/loadingSlice";

const store = configureStore({
	reducer: {
		potentialCountries: potentialCountriesReducer,
		displayedCountry: displayedCounrtyReducer,
		loadingState: loadingReducer,
	},
});

export default store;
