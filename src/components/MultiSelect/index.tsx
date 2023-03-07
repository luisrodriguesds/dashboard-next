import React, { useState } from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  MenuOptionGroup,
  MenuItemOption,
  MenuButtonProps,
  Button,
} from '@chakra-ui/react'

export type MultiSelectMenuProps = {
  label: string
  options: string[]
  onChange?: (selectedValues: string[]) => void
  buttonProps?: MenuButtonProps
}

export function MultiSelectMenu({
  label,
  options,
  buttonProps,
  onChange,
}: MultiSelectMenuProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  return (
    <Menu closeOnSelect={false}>
      {({ onClose }) => (
        <>
          <MenuButton>
            <Button
              backgroundColor={selectedOptions.length ? 'gray.100' : 'white'}
              color="gray.600"
              borderColor="gray.300"
              borderWidth="1px"
              p={2}
              px={4}
              _focus={{
                outline: 'none',
              }}
              {...buttonProps}
            >
              {`${label}${
                selectedOptions.length > 0 ? ` (${selectedOptions.length})` : ''
              }`}
            </Button>
          </MenuButton>
          <MenuList>
            <MenuGroup title={undefined}>
              <MenuItem
                onClick={() => {
                  setSelectedOptions([])
                  onClose()
                }}
              >
                Clear all
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuOptionGroup
              title={undefined}
              defaultValue={selectedOptions}
              type="checkbox"
              // @ts-ignore Arguments type is just wrong upstream.
              onChange={(values: string[]) => {
                setSelectedOptions(values.filter((_) => _.length))
                onChange && onChange?.(values)
              }}
            >
              {options.map((option) => {
                return (
                  // Use 'type'='button' to make sure it doesn't default to 'type'='submit'.
                  <MenuItemOption
                    key={`multiselect-menu-${option}`}
                    /* eslint-disable @typescript-eslint/ban-ts-comment */
                    // @ts-ignore <MenuItemOption> does have a 'type' prop because it is just a button. This is to make sure clicking this doesn't submit any forms.
                    type="button"
                    /* eslint-enable @typescript-eslint/ban-ts-comment */
                    value={option}
                    isChecked={selectedOptions.includes(option)}
                  >
                    {option}
                  </MenuItemOption>
                )
              })}
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  )
}
