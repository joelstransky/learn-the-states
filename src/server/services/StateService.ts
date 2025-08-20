import { Service, OnStart } from "@flamework/core";
import { Players } from "@rbxts/services";
import { US_STATES, StateName } from "shared/types";
import Object from "@rbxts/object-utils";

@Service()
export class StateService implements OnStart {
	private playerStates = new Map<Player, Set<StateName>>();

	onStart() {
		print("StateService onStart");
		this.setupPlayerTracking();
	}

	private setupPlayerTracking() {
		// Track when players join and leave
		Players.PlayerAdded.Connect((player) => {
			this.playerStates.set(player, new Set());
		});

		Players.PlayerRemoving.Connect((player) => {
			this.playerStates.delete(player);
		});
	}

	/**
	 * Get all states that a player has visited
	 */
	getPlayerVisitedStates(player: Player): StateName[] {
		const visitedStates = this.playerStates.get(player);
		if (!visitedStates) return [];
		
		const result: StateName[] = [];
		for (const state of visitedStates) {
			result.push(state);
		}
		return result;
	}

	/**
	 * Mark a state as visited by a player
	 */
	markStateAsVisited(player: Player, stateName: StateName) {
		const visitedStates = this.playerStates.get(player);
		if (visitedStates) {
			visitedStates.add(stateName);
		}
	}

	/**
	 * Get the total number of states a player has visited
	 */
	getPlayerProgress(player: Player): number {
		const visitedStates = this.playerStates.get(player);
		return visitedStates ? visitedStates.size() : 0;
	}

	/**
	 * Get the total number of states in the game
	 */
	getTotalStates(): number {
		return Object.keys(US_STATES).size();
	}
}
