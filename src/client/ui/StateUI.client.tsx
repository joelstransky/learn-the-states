import React, { useState, useEffect } from "@rbxts/react";
import { Players } from "@rbxts/services";
import { STATE_CAPITALS, StateName } from "shared/types";

interface StateUIProps {
	currentState?: StateName;
}

export function StateUI({ currentState }: StateUIProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(currentState !== undefined);
	}, [currentState]);

	if (!isVisible || !currentState) {
		return <></>;
	}

	const capital = STATE_CAPITALS[currentState];

	return (
		<frame
			Size={new UDim2(0, 300, 0, 150)}
			Position={new UDim2(0.5, -150, 0.1, 0)}
			BackgroundColor3={new Color3(0.2, 0.2, 0.2)}
			BorderSizePixel={0}
			ZIndex={10}
		>
			<uicorner CornerRadius={new UDim(0, 8)} />
			<uistroke Color={new Color3(0.4, 0.4, 0.4)} Thickness={2} />
			
			<textlabel
				Size={new UDim2(1, 0, 0.5, 0)}
				Position={new UDim2(0, 0, 0, 0)}
				BackgroundTransparency={1}
				Text={currentState}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
				Font={Enum.Font.GothamBold}
				ZIndex={11}
			/>
			
			<textlabel
				Size={new UDim2(1, 0, 0.3, 0)}
				Position={new UDim2(0, 0, 0.5, 0)}
				BackgroundTransparency={1}
				Text={`Capital: ${capital}`}
				TextColor3={new Color3(0.8, 0.8, 0.8)}
				TextScaled={true}
				Font={Enum.Font.Gotham}
				ZIndex={11}
			/>
			
			<textlabel
				Size={new UDim2(1, 0, 0.2, 0)}
				Position={new UDim2(0, 0, 0.8, 0)}
				BackgroundTransparency={1}
				Text="Step on a state to learn more!"
				TextColor3={new Color3(0.6, 0.6, 0.6)}
				TextScaled={true}
				Font={Enum.Font.Gotham}
				ZIndex={11}
			/>
		</frame>
	);
}
