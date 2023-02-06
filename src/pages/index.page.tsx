import {
  Flex,
  FormControl,
  Heading,
  Stack,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Card } from '../components/Card'
import { Button } from '../components/Form/Button'
import { Input } from '../components/Form/Input'

export default function Home() {
  return (
    <Flex w="100%" h={['auto', '100vh']} justify="center" align="center">
      <Card maxW={420} boxShadow="md">
        <Heading display="flex" justifyContent="center">
          System ADM<Text color="blue.300">.</Text>
        </Heading>
        <Stack spacing="5" mt="6">
          <Input label="E-mail or Id" placeholder="Entre with Email or Id" />
          <Input
            label="Password"
            type="password"
            placeholder="Entre with your Password"
          />
          <FormControl
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button>Entrar</Button>
            <Link href="/forgot-password" passHref>
              <ChakraLink>Esqueci minha senha</ChakraLink>
            </Link>
          </FormControl>
        </Stack>
      </Card>
    </Flex>
  )
}
