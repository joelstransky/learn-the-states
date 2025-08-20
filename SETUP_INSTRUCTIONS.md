# Learn The States - Setup Instructions

## Overview
This Roblox game helps players learn US states and their capitals by walking on state meshes in a 3D USA map.

## Setup Requirements

### 1. Workspace Setup
- Ensure you have a Model named `USA_Map` in your Workspace
- The `USA_Map` should contain 50 child meshes, each named after a US state
- State names should match exactly: "Alabama", "Alaska", "Arizona", etc.

### 2. State Mesh Requirements
Each state mesh should be:
- A BasePart (Part, MeshPart, etc.)
- Named exactly as the state name (e.g., "California", "Texas")
- Positioned to represent the state's location on the map
- Initially colored grey (the system will handle color changes)

### 3. Player Setup
- Players should spawn near or above the USA_Map
- The game automatically detects when players step on state meshes

## How It Works

### State Detection
- When a player steps on a state mesh, it turns blue
- When the player leaves the state mesh, it returns to grey
- The system prints state names to the output when players enter/leave states

### Color System
- **Default (Grey)**: `Color3(0.7, 0.7, 0.7)` - States not being visited
- **Highlighted (Blue)**: `Color3(0.2, 0.4, 0.8)` - State currently being visited

### State Names
The system recognizes all 50 US states:
- Alabama, Alaska, Arizona, Arkansas, California
- Colorado, Connecticut, Delaware, Florida, Georgia
- Hawaii, Idaho, Illinois, Indiana, Iowa
- Kansas, Kentucky, Louisiana, Maine, Maryland
- Massachusetts, Michigan, Minnesota, Mississippi, Missouri
- Montana, Nebraska, Nevada, New Hampshire, New Jersey
- New Mexico, New York, North Carolina, North Dakota, Ohio
- Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina
- South Dakota, Tennessee, Texas, Utah, Vermont
- Virginia, Washington, West Virginia, Wisconsin, Wyoming

## Testing
1. Build and run the game
2. Walk around the USA_Map
3. Step on different state meshes
4. Check the output for state detection messages
5. Observe color changes on the state meshes

## Future Features
- UI display showing state name and capital when stepped on
- Progress tracking for visited states
- Quiz system for state capitals
- Achievement system for completing all states

## Troubleshooting
- If states aren't being detected, check that the mesh names exactly match the state names
- Ensure the USA_Map model is in the Workspace
- Verify that state meshes are BaseParts
- Check that players can physically reach the state meshes
