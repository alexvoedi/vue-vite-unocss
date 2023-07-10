import { createI18n } from 'vue-i18n'

const loadTranslations = () => {
  const files = import.meta.glob<{ default: any }>('../../lang/*.json', {
    eager: true,
  })

  const messages = Object.entries(files).map(([key, value]) => {
    return [key.slice(11, -5), value.default]
  })

  return Object.fromEntries(messages)
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: loadTranslations(),
})

export { i18n }
