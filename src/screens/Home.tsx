import { FlatList, Flex, ScrollView, Text } from "native-base";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Post } from "../components/Post";
import { api } from "../services/api";

interface AnimeInfo {
    animeId: string
    animeImg: string
    animeTitle: string
}

export function Home() {

    const [animeInfo, setAnimeInfo] = useState<AnimeInfo[]>([] as AnimeInfo[])

    async function getAnime() {
        try {
           const response = await api.get<AnimeInfo []>('/popular')

           setAnimeInfo(response.data.slice(0, 5))
        }catch(err) {   
            console.log(err)
        }
    }

    useEffect(() => {
        getAnime()
    }, [])

    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
            <Flex px="4" flex={1} pt={12} backgroundColor="blue.900">
                <FlatList
                    data={animeInfo}
                    renderItem={({ item }) => 
                        <Card animeImg={item.animeImg} animeTitle={item.animeTitle} />
                    }
                    horizontal 
                    keyExtractor={({ animeId }) => animeId}
                    _contentContainerStyle={{
                        px: 8
                      }}
                      my={10}
                      maxH="220px"
                      minH="220px"
                      showsHorizontalScrollIndicator={false}
                />

                <Text color="white" py={4} fontFamily="heading" fontSize="xl">
                    Continue Assistindo
                </Text>

                <Flex flexDirection="row">
                    <Post />
                    <Post />
                </Flex>
            </Flex>
        </ScrollView>
    )
}