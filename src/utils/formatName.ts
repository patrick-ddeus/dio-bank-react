export default function formatName(fullname: string): string {
  const regex =
    /^(?<nome>[A-Za-z]+)\s(?:(?<preposicao>da|de|do)\s)?(?<sobrenome>[A-Za-z]+)$/;
  const resultado = regex.exec(fullname);

  const { nome, preposicao, sobrenome } = resultado?.groups as any;

  if (preposicao) {
    return `${nome} ${preposicao} ${sobrenome}`;
  }

  return `${nome} ${sobrenome}`;
}
