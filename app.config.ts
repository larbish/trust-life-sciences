export default defineAppConfig({
  ui: {
    primary: 'teal',
    gray: 'zinc',
    variables: {
      light: {
        background: 'var(--color-gray-100)'
      },
      dark: {
        background: 'var(--color-gray-950)'
      }
    },
    button: {
      rounded: 'rounded-full',
      default: {
        size: 'md',
        color: 'black'
      }
    },
    input: {
      rounded: 'rounded-md'
    },
    header: {
      wrapper: 'lg:!border-transparent bg-gray-200 dark:bg-gray-950',
      links: {
        wrapper: 'ring-1 ring-gray-500 dark:ring-gray-900 px-3 gap-x-0 rounded-full',
        base: 'text-md py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-gray-900 dark:after:bg-white after:transition-opacity',
        active: 'text-gray-900 dark:text-white after:opacity-100',
        inactive: 'text-gray-600 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-200'
      }
    },
    footer: {
      bottom: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  }
})
