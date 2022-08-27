import React from "react";
import { Text, HStack, Pressable } from "native-base";
import { Heart } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

export function Header() {
  const navigation = useNavigation();
  return (
    <HStack
      w="full"
      h="10%"
      bg="primary.700"
      alignItems="center"
      flexDirection="row"
    >
      <Text ml={4} fontSize="lg" color="white">
        Rick and Morty's
      </Text>

      <Pressable
        onPress={() => navigation.navigate("favorites")}
        flexDirection="row"
        alignItems="center"
        mr={4}
        ml="auto"
      >
        <Text color="white" mr={2}>
          Favoritos
        </Text>
        <Heart size={26} color="white" />
      </Pressable>
    </HStack>
  );
}
