import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { IChar } from "../types/IChar";

const characters = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    character: {},
    favorites: [],
  },
  reducers: {
    loadCharactersSuccess(state, response: any) {
      state.characters = response;
    },
    addFavorites(state: any, character: any) {
      const n = character.payload.name;
      const f = state.favorites.find((f: any) => f.payload.name === n);
      if (f === undefined) {
        state.favorites = [...state.favorites, character];
        return;
      }
      return Alert.alert("Favoritos", "Personagem já está nos favoritos");
    },
  },
});

export const { loadCharactersSuccess, addFavorites } = characters.actions;

export default characters.reducer;
