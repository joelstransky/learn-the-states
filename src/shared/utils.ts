import { StateName, STATE_CAPITALS } from "./types";

/**
 * Gets the capital of a given state
 * @param stateName - The name of the state
 * @returns The capital city name
 */
export function getStateCapital(stateName: StateName): string {
	return STATE_CAPITALS[stateName];
}

/**
 * Checks if a given string is a valid state name
 * @param name - The string to check
 * @returns True if it's a valid state name
 */
export function isValidStateName(name: string): name is StateName {
	return name in STATE_CAPITALS;
}

/**
 * Gets a random state name
 * @returns A random state name
 */
export function getRandomState(): StateName {
	const stateNames = [
		"Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
		"Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
		"Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
		"New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
		"Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
		"Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
	] as StateName[];
	const randomIndex = math.floor(math.random() * stateNames.size());
	return stateNames[randomIndex];
}

/**
 * Formats a state name for display (handles special cases)
 * @param stateName - The state name to format
 * @returns The formatted state name
 */
export function formatStateName(stateName: StateName): string {
	// Handle states with special formatting
	switch (stateName) {
		case "New Hampshire":
		case "New Jersey":
		case "New Mexico":
		case "New York":
		case "North Carolina":
		case "North Dakota":
		case "Rhode Island":
		case "South Carolina":
		case "South Dakota":
		case "West Virginia":
			return stateName;
		default:
			return stateName;
	}
}
