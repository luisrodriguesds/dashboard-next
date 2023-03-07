import { useState } from 'react'
import { CalendarIcon } from '@chakra-ui/icons'
import { Button, ButtonProps, Flex, Icon } from '@chakra-ui/react'

export function DateFilter() {
  const [currentActive, setCurrentActive] = useState('')
  function handleActive(active: string) {
    setCurrentActive((state) => (state === active ? '' : active))
  }
  return (
    <Flex
      borderRadius="lg"
      overflow="hidden"
      borderColor="gray.300"
      borderWidth="1px"
      flex={1}
    >
      <ToggleGroupButton
        isActive={currentActive === '24h'}
        onClick={() => handleActive('24h')}
        borderRightRadius={0}
      >
        24 horas
      </ToggleGroupButton>
      <ToggleGroupButton
        isActive={currentActive === '7d'}
        onClick={() => handleActive('7d')}
        borderRadius={0}
      >
        7 dias
      </ToggleGroupButton>
      <ToggleGroupButton
        isActive={currentActive === '30d'}
        onClick={() => handleActive('30d')}
        borderRadius={0}
      >
        30 dias
      </ToggleGroupButton>
      <ToggleGroupButton
        borderRight={0}
        borderRightRadius={0}
        leftIcon={<Icon as={CalendarIcon} />}
      >
        Custom
      </ToggleGroupButton>
    </Flex>
  )
}
interface ToggleGroupButtonProps extends ButtonProps {
  isActive?: boolean
}
function ToggleGroupButton({
  children,
  isActive,
  colorScheme = 'gray',
  backgroundColor = 'white',
  borderRightColor = 'gray.300',
  size = 'md',
  borderRightWidth = '1px',
  borderRadius = '0',
  ...rest
}: ToggleGroupButtonProps) {
  return (
    <Button
      colorScheme={colorScheme}
      backgroundColor={isActive ? 'gray.200' : backgroundColor}
      borderRightColor={borderRightColor}
      size={size}
      borderRightWidth={borderRightWidth}
      borderRadius={borderRadius}
      {...rest}
    >
      {children}
    </Button>
  )
}
