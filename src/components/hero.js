import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';


export const Hero = () => {
  const bg = useColorModeValue(
    'rgba(50, 33, 115, 0.9)',
    'rgba(26, 32, 44, 0.8)',
  )
  return (
    <Box as='section' sx={{ bg: bg, color: 'invert' }}>
      {' '}
      <Container maxW='container.xl' py={90} centerContent>
        <Flex direction='column'>
          <Image
                w={225}
                src={'/pangeo_simple_logo_white.png'}
                alt={'Pangeo logo'}
              />
          <Text
            textTransform={'uppercase'}
            color={'white'}
            opacity={0.8}
            align={'center'}
          >
            {' '}
            A community platform for Big Data geoscience
          </Text>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="pangeo_data"
            options={{height: 400}}
          />
          {/*  TODO: add discourse */}
        </Flex>
      </Container>
    </Box>
  )
}
