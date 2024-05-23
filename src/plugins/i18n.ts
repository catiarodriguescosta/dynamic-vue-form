import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
    locale: 'pt',
    fallbackLocale: 'en',
    messages: {
      en: {
        termsAndConditions:{
            title: 'Terms and conditions',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor dolor, condimentum et posuere id, auctor sit amet purus. Sed sed libero vitae tellus placerat ullamcorper. Mauris lectus risus, fermentum quis risus vel, tempor mattis sapien. Quisque scelerisque quam non vestibulum varius. Integer auctor pulvinar quam nec pharetra. Mauris sapien massa, tristique vitae odio at, interdum molestie ante. Morbi cursus a erat at rutrum.'
        },
        serviceForm:{
            name: {
                label: 'Name',
                errorMsg: '' 
            },
            email: {
                label: 'Email',
                errorMsg: '' 
            },
            password: {
                label: 'Password',
                errorMsg: 'Must have at least 8 characters and 1 number' 
            },
            dateOfBirth: {
                label: 'Date of Birth',
                errorMsg: 'Incorrect Date of Birth' 
            },
            choiceOfService: {
                label: 'Choice of Service',
                errorMsg: 'Choose one service' 
            },
            servicesOptions: ['Web development','Mobile development','SEO services', 'Other'],
            otherServiceName: {
                label: '',
                errorMsg: 'Specify Other service'
            },
            termsAndConditionsCheck: {
                label_part1: 'I read and accept',
                label_part2: 'Terms and Conditions',
                link: '/terms_and_conditions',
                errorMsg: 'Mandatory field' 
            },
            controls: ['Previous', 'Next', 'Submit']
            
        }
      },
      pt:{
        message: {
            hello: 'Ola mundo!'
          },
        termsAndConditions:{
            title: 'Termos e Condições',
            content: 'Lorem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável com essas palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer sentido.\n\nÉ uma seqüência de palavras latinas que, como estão posicionadas, não formem frases com um sentido completo, mas dão vida a um texto de teste útil para preencher espaços que irão Posteriormente serão ocupados a partir de textos ad hoc compostos por profissionais de comunicação.'
        },
        serviceForm:{
            name: {
                label: 'Nome',
                errorMsg: 'Nome obrigatório' 
            },
            email: {
                label: 'Email',
                errorMsg: 'Email obrigatório' 
            },
            password: {
                label: 'Password',
                errorMsg: 'Password deve ter 8 ou mais caracteres e deve conter pelo menos 1 algarismo' 
            },
            dateOfBirth: {
                label: 'Data de nascimento',
                errorMsg: 'Data de nascimento incorrecta.' 
            },
            choiceOfService: {
                label: 'Escolha um serviço',
                errorMsg: 'A escolha de um serviço é obrigatória' 
            },
            servicesOptions: ['Desenvolvimento para web','Desenvolvimento para telemóveis','Serviços de SEO', 'Outro'],
            otherServiceName: {
                label: '',
                errorMsg: 'Especifique o serviço' 
            },
            termsAndConditionsCheck: {
                label_part1: 'Li e aceito os',
                label_part2: 'Termos e Condições',
                link: '/terms_and_conditions',
                errorMsg: 'Campo mandatório' 
            },
            controls: ['Anterior', 'Seguinte', 'Enviar']
            
        }
      }
    }
  })
  