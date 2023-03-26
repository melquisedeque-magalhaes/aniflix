import { Flex, Image, Text } from "native-base";


interface CardProps {
    animeImg: string
    animeTitle: string
}

export function Card({ animeImg, animeTitle }: CardProps) {

    return(
        <Flex 
            mr={4}
            justify="flex-end" 
            w="300px" 
            h="220px" 
            position="relative" 
            borderRadius="md" 
            overflow="hidden"
        >
            <Image
                position="absolute"
                width="100%"
                height="100%"
                resizeMode="stretch"
                source={{
                    uri: animeImg
                }} 
                alt={animeTitle || ''}
            />
            <Text 
                pb={4} 
                pl={4} 
                fontFamily="heading" 
                fontSize="2xl" 
                color="gray.100" 
            >
                {animeTitle}
            </Text>
        </Flex>
    )
}