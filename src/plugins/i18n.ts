import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
    locale: 'pt',
    fallbackLocale: 'en',
    messages: {
      en: {
        message: {
          hello: 'hello world'
        },
        termsAndConditions:{
            title: 'Terms and conditions',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor dolor, condimentum et posuere id, auctor sit amet purus. Sed sed libero vitae tellus placerat ullamcorper. Mauris lectus risus, fermentum quis risus vel, tempor mattis sapien. Quisque scelerisque quam non vestibulum varius. Integer auctor pulvinar quam nec pharetra. Mauris sapien massa, tristique vitae odio at, interdum molestie ante. Morbi cursus a erat at rutrum.'
        }
      },
      ja: {
        message: {
          hello: 'こんにちは、世界'
        }

      },
      pt:{
        message: {
            hello: 'Ola mundo!'
          },
        termsAndConditions:{
            title: 'Termos e Condições',
            content: 'Lorem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável com essas palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer sentido.\n\nÉ uma seqüência de palavras latinas que, como estão posicionadas, não formem frases com um sentido completo, mas dão vida a um texto de teste útil para preencher espaços que irão Posteriormente serão ocupados a partir de textos ad hoc compostos por profissionais de comunicação.'
        }
      }
    }
  })
  