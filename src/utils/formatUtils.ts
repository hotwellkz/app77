export const formatAmount = (amount: number): string => {
  const absAmount = Math.abs(amount);
  
  const formatWithSpaces = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };
  
  if (absAmount >= 1000) {
    return `${formatWithSpaces(Math.floor(absAmount / 1000))}k ₸`;
  }
  
  return `${formatWithSpaces(Number(absAmount.toFixed(2)))} ₸`;
};