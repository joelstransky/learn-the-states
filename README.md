# Learn The States - Roblox Game

A Roblox game designed to help players learn the US states and their capitals through interactive gameplay.

## Features

### State Highlighting
- **Blue Highlighting**: When a player walks onto a state, it turns blue to indicate they are currently on that state
- **Grey Default**: States return to grey when the player walks off of them
- **Real-time Feedback**: The system provides immediate visual feedback as players explore the map

## Setup Instructions

1. **Import the USA_Map Model**: 
   - Place the `USA_Map.fbx` model in your Roblox Workspace
   - Ensure the model contains 50 MeshParts, each named after a US state

2. **Build the Project**:
   ```bash
   npm run build
   ```

3. **Start Rojo**:
   ```bash
   npm run rojo
   ```

4. **Connect to Roblox Studio**:
   - Use the Rojo plugin in Roblox Studio to sync the project
   - The game will automatically detect the USA_Map model and set up state highlighting

## How It Works

The game uses Flamework services to:
- Automatically detect all state meshes in the USA_Map model
- Set up touch events for each state
- Track player movement and highlight states accordingly
- Handle player connections and disconnections

## State Names

The system expects the following state names in your USA_Map model:
- Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia
- Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland
- Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada
- New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio
- Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee
- Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming

## Development

- **Server Scripts**: Located in `src/server/`
- **Client Scripts**: Located in `src/client/`
- **Shared Modules**: Located in `src/shared/`

## Next Features

Future enhancements planned:
- State capital quizzes
- State information display
- Achievement system
- Multiplayer state learning challenges
