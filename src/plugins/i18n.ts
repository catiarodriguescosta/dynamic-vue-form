import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
    locale: 'ja',
    fallbackLocale: 'en',
    messages: {
      en: {
        message: {
          hello: 'hello world'
        },
      },
      ja: {
        message: {
          hello: 'こんにちは、世界'
        }
      },
      pt:{
        message: {
            hello: 'Ola mundo!'
          }
      }
    }
  })
  