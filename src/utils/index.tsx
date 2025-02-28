function formatDate(dateValue: string) {
  const date = new Date(dateValue);
  const formatted = new Intl.DateTimeFormat("pt-BR").format(date);
  return formatted;
}

function formatPhone(phone: string) {
  return phone
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "+$1 $2")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{1,4})/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
}

export { formatDate, formatPhone };
