import React from "react";
import { ScrollView, VStack } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, loadCharactersSuccess } from "../store/Character.store";
import { useQuery } from "@apollo/client";
import INFO_CHARACTER from "../queries";
import { Header } from "../components/Header";
import { IChar } from "../types/IChar";
import { CharCard } from "../components/CharCard";
import { Alert } from "react-native";

export function Home() {
  const dispatch = useDispatch();
  const { data, loading, error } = useQuery(INFO_CHARACTER);

  React.useEffect(() => {
    dispatch(loadCharactersSuccess(data));
  }, [data]);

  const results = useSelector(
    (state: any) =>
      state.charactersReducer?.characters?.payload?.characters?.results
  );
  //console.log(results);

  function insertFavorite(char: IChar) {
    dispatch(addFavorites(char));
    return Alert.alert("Favoritos", `${char.name} adicionado aos favoritos`);
  }

  return (
    <VStack w="full" flex={1}>
      <Header />
      <VStack
        w="full"
        flex={1}
        justifyContent="center"
        alignItems="center"
        mt={4}
      >
        <ScrollView>
          {results &&
            results.map((char: IChar, index: number) => (
              <CharCard
                key={index}
                image={char.image}
                name={char.name}
                species={char.species}
                onPress={() => insertFavorite(char)}
              />
            ))}
        </ScrollView>
      </VStack>
    </VStack>
  );
}
