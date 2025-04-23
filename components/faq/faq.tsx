import { chakra, SimpleGrid } from '@chakra-ui/react'
import { Section, SectionProps, SectionTitle } from 'components/section'

interface FaqProps extends Omit<SectionProps, 'title' | 'children'> {
  title?: React.ReactNode
  description?: React.ReactNode
  items: { q: React.ReactNode; a: React.ReactNode }[]
}

export const Faq: React.FC<FaqProps> = (props) => {
  const {
    title = 'Frequently asked questions',
    description,
    items = [],
  } = props

  return (
    <Section id="faq">
      <SectionTitle title={title} description={description} />

      <SimpleGrid columns={[1, null, 2]} spacingY={10} spacingX="20">
        {items?.map(({ q, a }, i) => {
          return <FaqItem key={i} question={q} answer={a} />
        })}
      </SimpleGrid>
    </Section>
  )
}

export interface FaqItemProps {
  question: React.ReactNode
  answer: React.ReactNode
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <chakra.dl
      bg="gray.100"
      _dark={{ bg: 'gray.700' }}
      p={6}
      borderRadius="xl"
      boxShadow="sm"
      transition="box-shadow 0.2s ease-in-out"
      _hover={{ boxShadow: 'md' }}
    >
      <chakra.dt fontWeight="semibold" mb="2" color="#00DBA4">
        {question}
      </chakra.dt>
      <chakra.dd color="gray.600" _dark={{ color: 'gray.300' }}>
        {answer}
      </chakra.dd>
    </chakra.dl>
  )
}
