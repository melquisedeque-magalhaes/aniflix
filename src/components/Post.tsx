import { Flex, Image } from "native-base";
import { useEffect, useState } from "react";
import { api } from "../services/api";

interface AnimeInfo {
    animeImg: string
    animeTitle: string
}

export function Post() {

    const [animeInfo, setAnimeInfo] = useState<AnimeInfo>({} as AnimeInfo)

    async function getAnime() {
        try {
           const response = await api.get('/anime-details/naruto')

           setAnimeInfo(response.data)
        }catch(err) {   
            console.log(err)
        }
    }

    useEffect(() => {
        getAnime()
    }, [])

    return(
        <Flex h="120px" w="180px" overflow="hidden" position="relative" borderRadius="md" ml={4}>
            <Image
                position="absolute"
                width="100%"
                height="100%"
                resizeMode="stretch"
                source={{
                    uri: animeInfo.animeImg
                }} 
                alt={animeInfo.animeTitle || ''}
            />
        </Flex>
    )
}