import React from "react";
import {
  Box,
  HStack,
  IconButton,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { ArrowCircleLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { IChar } from "../types/IChar";

export function Favorites() {
  const navigation = useNavigation();
  const [fav, setFav] = React.useState<any>([]);
  const favorites = useSelector(
    (state: any) => state.charactersReducer?.favorites
  );

  React.useEffect(() => {
    if (favorites) {
      setFav(favorites);
    }
  }, [favorites]);

  console.log("favoo", fav);
  return (
    <VStack w="full" flex={1}>
      <HStack w="full" h="10%" bg="primary.700" alignItems="center">
        <IconButton
          onPress={() => navigation.goBack()}
          icon={<ArrowCircleLeft size={26} color="white" />}
        />
        <Text ml="12%" color="white" fontSize="lg">
          Personagens favoritos
        </Text>
      </HStack>
      <VStack bg="primary.100" flex={1} alignItems="center">
        <ScrollView showsVerticalScrollIndicator={false}>
          {fav.length > 0 ? (
            fav.map((item: any, index: number) => (
              <Box alignItems="center" w="full" mt={4} key={index}>
                <Image
                  source={{ uri: item.payload.image }}
                  alt="imagem"
                  rounded="full"
                  w={100}
                  h={100}
                />
                <Text fontSize="lg" color="white" mt={2} textAlign="center">
                  {item.payload.name}
                </Text>
              </Box>
            ))
          ) : (
            <Text color="white" fontSize="lg" mt="50%">
              Adicione favoritos...
            </Text>
          )}
        </ScrollView>
      </VStack>
    </VStack>
  );
}
