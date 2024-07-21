import { Container, Flex, Grid, Heading, Section, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

const SectionCard = () => {
  return (
    <Container className='w-full py-12 px-6 text-white'>
        <Grid columns="2" justify="center" className='bg-secondary py-12 px-6 rounded-2xl md:rounded-3xl'>
            <div className='w-full mx-auto'>
                <Image 
                src="/images/homepage/avatar-man3.png"
                width={300}
                height={300}
                priority
                alt="avatar"
                className='mx-auto !object-cover'
                />
            </div>
            <Flex direction="column" gapY="4">
                <Heading size={{
                    initial: "6",
                    sm: "8"
                }}>
                    Start anonymous conversations now!
                </Heading>
                <Text>
                    Create a thread and start getting anonymous replies from friends <br /> in real time! 🥳
                    <br /> See what your friends think about you.
                </Text>
            </Flex>
        </Grid>
    </Container>
  )
}

export default SectionCard