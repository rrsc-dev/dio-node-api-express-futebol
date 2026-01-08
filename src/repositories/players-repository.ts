import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    { id: 1, name: "Player One" },
    { id: 2, name: "Player Two" },
    { id: 2, name: "Player Three" }
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find( player => player.id === id )
}