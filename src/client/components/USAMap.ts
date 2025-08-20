import { OnStart } from "@flamework/core";
import { Component } from "@flamework/components";
import { Workspace, Players } from "@rbxts/services";
import { STATE_COLORS, US_STATES, StateName } from "shared/types";
import Object from "@rbxts/object-utils";

// Events for server communication
export const StateEvents = {
	onStateEntered: new Instance("BindableEvent"),
	onStateExited: new Instance("BindableEvent"),
};

@Component({
	tag: "usa-map",
})
export class USAMapComponent implements OnStart {
	private stateMeshes = new Map<string, BasePart>();
	private currentStateMesh?: BasePart;
	private currentStateName?: StateName;

	onStart() {
		print("USAMapComponent onStart");
		this.setupStateMeshes();
		this.setupTouchDetection();
	}

	private setupStateMeshes() {
		wait(1);
		// Find the USA_Map model in Workspace
		const usaMap = Workspace.FindFirstChild("USA_Map") as Model;
		print("USA_Map found:", usaMap);
		usaMap.WaitForChild("Alaska");	
		if (!usaMap) {
			warn("USA_Map not found in Workspace!");
			return;
		}

		print("USA_Map children count:", usaMap.GetChildren().size());
		
		// Get all state meshes
		usaMap.GetChildren().forEach((child) => {
			print("Child:", child.Name, "Type:", child.ClassName);
			if (child.IsA("BasePart")) {
				print("  - Is BasePart: true");
				if (this.isStateName(child.Name)) {
					print("  - Is valid state name: true");
					print("  - Setting state mesh for:", child.Name);
					this.stateMeshes.set(child.Name, child);
					// Ensure the mesh starts with the default grey color
					this.setMeshColor(child, STATE_COLORS.DEFAULT);
				} else {
					print("  - Is valid state name: false");
				}
			} else {
				print("  - Is BasePart: false");
			}
		});

		print(`Found ${this.stateMeshes.size()} state meshes`);
	}

	private setupTouchDetection() {
		// Set up touch detection for each state mesh
		this.stateMeshes.forEach((mesh, stateName) => {
			mesh.Touched.Connect((part) => {
				this.onStateTouched(part, mesh, stateName);
			});

			mesh.TouchEnded.Connect((part) => {
				this.onStateTouchEnded(part, mesh, stateName);
			});
		});
	}

	private onStateTouched(part: BasePart, mesh: BasePart, stateName: string) {
		// Check if the touching part belongs to the player
		if (this.isPlayerPart(part)) {
			print(`Player stepped on ${stateName}`);
			this.setMeshColor(mesh, STATE_COLORS.HIGHLIGHTED);
			this.currentStateMesh = mesh;
			this.currentStateName = stateName as StateName;
			
			// Emit event for server communication
			StateEvents.onStateEntered.Fire(stateName as StateName);
		}
	}

	private onStateTouchEnded(part: BasePart, mesh: BasePart, stateName: string) {
		// Check if the touching part belongs to the player
		if (this.isPlayerPart(part)) {
			print(`Player left ${stateName}`);
			this.setMeshColor(mesh, STATE_COLORS.DEFAULT);
			if (this.currentStateMesh === mesh) {
				this.currentStateMesh = undefined;
				this.currentStateName = undefined;
			}
			
			// Emit event for server communication
			StateEvents.onStateExited.Fire(stateName as StateName);
		}
	}

	private isPlayerPart(part: BasePart): boolean {
		// Check if the part belongs to the player's character
		const player = Players.LocalPlayer;
		const character = player.Character;
		return character !== undefined && part.IsDescendantOf(character);
	}

	private isStateName(name: string): name is StateName {
		// Check if the name exists in the US_STATES object
		const stateNames = Object.values(US_STATES);
		const isValid = stateNames.includes(name as StateName);
		if (!isValid) {
			print("  - Checking name:", name, "against state names:", stateNames);
		}
		return isValid;
	}

	private setMeshColor(mesh: BasePart, color: Color3) {
		// Set the color of the mesh
		if (mesh.Material !== Enum.Material.Neon) {
			mesh.Material = Enum.Material.Neon;
		}
		mesh.Color = color;
	}

	// Getter for current state
	public getCurrentState(): StateName | undefined {
		return this.currentStateName;
	}

	public getStateMeshes(): Map<string, BasePart> {
		return this.stateMeshes;
	}
}
