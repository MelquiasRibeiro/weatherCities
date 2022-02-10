export function getWeekDay(str: number) {
  const date = new Date(Number(str) * 1000);
  const dayOfWeek = [
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
      'Domingo',
    ],
    US_date = new Date(date);

  return dayOfWeek[US_date.getDay() - 1 >= 0 ? US_date.getDay() - 1 : 6];
}

export function getFormatedDate(str: number) {
  const date = new Date(Number(str) * 1000);

  const monthName = [
      'Janeiro',
      'Fevereiro',
      'MArco',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    US_date = new Date(date);

  return `${US_date.getDate()} de ${monthName[US_date.getMonth()]} `;
}
