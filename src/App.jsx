import { Text } from './components/atoms'
import { Body } from './components/layout'
import Title from './components/molecules/Title'

function App() {
  return (
    <Body>
      <Title type="h1">Sample of H1</Title>
      <Title type="h2">Sample of H2</Title>
      <Title type="h3">Sample of H3</Title>
      <Title type="h4">Sample of H4</Title>
      <Title type="h5">Sample of H5</Title>
      <Title type="h6">Sample of H6</Title>
      <Text>Buenas tardes</Text>
      <ul>
        <Text as="li">A</Text>
        <Text as="li">B</Text>
        <Text as="li">C</Text>
      </ul>
    </Body>
  )
}

export default App
