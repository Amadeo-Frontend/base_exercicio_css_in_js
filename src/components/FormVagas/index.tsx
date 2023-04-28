import { FormEvent, useState } from 'react'

import { VagasButton, VagasForm, VagasInput } from './style'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <VagasForm onSubmit={aoEnviarForm}>
      <VagasInput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <VagasButton type="submit">Pesquisar</VagasButton>
    </VagasForm>
  )
}
export default FormVagas
