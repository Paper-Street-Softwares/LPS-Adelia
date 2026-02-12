import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import SectionHeaderNovo from '../sectionElements/SectionHeaderNovo'
import { motion } from 'framer-motion'
import {
  Scale,
  HomeIcon,
  Building2,
  Coins,
  Shield,
  Users,
  Clock,
} from 'lucide-react'

function Cards({ colorMode }) {
  let text,
    textOpacity,
    backgroundMode,
    stepNumberBg,
    stepNumberText,
    lineColor,
    textDestaque,
    image,
    borderT

  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-terciary/60'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      stepNumberBg = 'bg-white'
      stepNumberText = 'text-primaryDark'
      lineColor = 'bg-primaryDark/20'
      textDestaque = 'text-primaryDark'
      image = ' border-[8px] border-white'
      borderT = 'border-t-primaryDark'
      break
    case 'dark':
      backgroundMode = 'bg-darkOpacity'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      stepNumberBg = 'bg-dark'
      stepNumberText = 'text-primaryLight'
      lineColor = 'bg-primaryLight/20'
      textDestaque = 'text-primaryLight'
      image = ' border-[8px] border-borderImage'
      borderT = 'border-t-primaryLight'

      break
    default:
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      stepNumberBg = 'bg-white'
      stepNumberText = 'text-primaryDark'
      lineColor = 'bg-primaryDark/20'
      textDestaque = 'text-primaryDark'
      image = ' border-[8px] border-white'
      borderT = 'border-t-primaryDark'
  }
  return (
    <SectionArea className={`${backgroundMode}`}>
      <SectionWrapper>
        <section id="serviços">
          <div className="container mx-auto">
            <SectionHeaderNovo
              miniTitle="Por que agir agora"
              title="Mais do que recuperar sua conta, é proteger o que você construiu"
              subtitle=""
              colorMode={colorMode}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div
                  className={`h-full cursor-pointer border-t-4 bg-white ${borderT} hover:shadow-xl transition-shadow duration-300`}
                >
                  {' '}
                  <div className="pt-8 px-6 pb-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-6">
                      <Clock className="w-7 h-7" />
                    </div>
                    <h1 className="text-xl font-secondFont font-bold text-primary mb-3">
                      Agilidade quando o tempo joga contra você
                    </h1>
                    <p
                      className={`font-secondFont text-sm ${textOpacity} leading-relaxed flex-grow`}
                    >
                      Quanto mais você demora, menores são as chances de
                      recuperar a conta. Aqui, seu caso é analisado rapidamente
                      para evitar prejuízos maiores.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div
                  className={`h-full cursor-pointer border-t-4 bg-white ${borderT} hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="pt-8 px-6 pb-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-6">
                      <Users className="w-7 h-7" />
                    </div>
                    <h1 className="text-xl font-secondFont font-bold text-primary mb-3">
                      Você não enfrenta a plataforma só
                    </h1>
                    <p
                      className={`font-secondFont text-sm ${textOpacity} leading-relaxed flex-grow`}
                    >
                      Bloqueios injustos, invasões e falhas acontecem. Ter apoio
                      jurídico muda o jogo e aumenta suas chances de resolver.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div
                  className={`h-full cursor-pointer border-t-4 bg-white ${borderT} hover:shadow-xl transition-shadow duration-300`}
                >
                  {' '}
                  <div className="pt-8 px-6 pb-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-6">
                      <Shield className="w-7 h-7" />
                    </div>
                    <h1 className="text-xl font-secondFont font-bold text-primary mb-3">
                      Proteção da sua imagem e do seu negócio
                    </h1>
                    <p
                      className={`font-secondFont text-sm ${textOpacity} leading-relaxed flex-grow`}
                    >
                      Evite que seus dados e sua imagem continuem sendo usados
                      de forma indevida, causando golpes, perdas financeiras e
                      danos à sua reputação.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div
                  className={`h-full cursor-pointer border-t-4 bg-white ${borderT} hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="pt-8 px-6 pb-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-6">
                      <Scale className="w-7 h-7" />
                    </div>
                    <h1 className="text-xl font-secondFont font-bold text-primary mb-3">
                      Clareza, estratégia e acompanhamento real
                    </h1>
                    <p
                      className={`font-secondFont text-sm ${textOpacity} leading-relaxed flex-grow`}
                    >
                      Você sabe exatamente o que está sendo feito, quais são os
                      próximos passos e acompanha tudo de perto, sem promessas
                      vazias.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default Cards
