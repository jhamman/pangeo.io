import { Footer, Header } from '@/components'
// import { Menu } from '@/components/dashboard'
import { getRootURL } from '@/lib/seo-utils'
import { Box, Flex } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

export const Layout = ({
  children,
  menu = null,
  title = 'Pangeo',
  description = 'A community platform for Big Data geoscience',
  image = `${getRootURL()}/pangeo-logo.png`,
  url = getRootURL(),
}) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url: url,
          title: title,
          description: description,
          images: [{ url: image, alt: title }],
        }}
        twitter={{
          handle: '@pangeo_data',
          site: '@pangeo_data',
          cardType: 'summary_large_image',
        }}
      />

      <Flex
        direction={'column'}
        justify={'space-between'}
        gap={0}
        minHeight={'100vh'}
      >
        <Box>
          <Header />
          {/* {menu && <Menu />} */}
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  )
}
