import React from "react";
import { HStack, IconButton, Image, Text, View } from "native-base";
import { Heart } from "phosphor-react-native";
import { useSelector } from "react-redux";
import { IChar } from "../types/IChar";

type Props = {
  image: string;
  name: string;
  species: string;
  onPress: () => void;
};

export function CharCard({ image, name, species, onPress }: Props) {
  return (
    <HStack
      rounded={10}
      w="90%"
      alignItems="center"
      bg="primary.600"
      mb={4}
      mx="auto"
      p={4}
    >
      <Image
        source={{ uri: image }}
        alt="char image"
        w={90}
        h={90}
        rounded="full"
        mr={4}
      />
      <View maxW={200}>
        <Text maxW="90%" color="white">
          {name}
        </Text>
        <Text color="white">{species}</Text>
      </View>

      <IconButton
        mr={1}
        ml="auto"
        onPress={onPress}
        icon={<Heart size={26} color="white" />}
      />
    </HStack>
  );
}
