import { Controller, OnStart } from "@flamework/core";
import { Players } from "@rbxts/services";
import { StateName } from "shared/types";
import { StateEvents } from "../components/USAMap";

print("StateController script loaded");

@Controller({})
export class StateController implements OnStart {
	private player = Players.LocalPlayer;

	onStart() {
		print("StateController onStart");
		this.setupServerCommunication();
	}

	private setupServerCommunication() {
		print("StateController: Setting up server communication");
		
		// Connect to USAMap component events
		StateEvents.onStateEntered.Event.Connect((stateName: StateName) => {
			this.onStateEntered(stateName);
		});

		StateEvents.onStateExited.Event.Connect((stateName: StateName) => {
			this.onStateExited(stateName);
		});
	}

	/**
	 * Called when a player enters a state
	 */
	public onStateEntered(stateName: StateName) {
		print(`StateController: Player entered ${stateName}`);
		// TODO: Send to server via networking
	}

	/**
	 * Called when a player exits a state
	 */
	public onStateExited(stateName: StateName) {
		print(`StateController: Player exited ${stateName}`);
		// TODO: Send to server via networking
	}

	/**
	 * Get the current state the player is on
	 */
	public getCurrentState(): StateName | undefined {
		// TODO: Get from USAMap component
		return undefined;
	}
}
