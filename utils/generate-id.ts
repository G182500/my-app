export const generateId = () => {
  const randomNumber = Math.random();
  //Converte o número para uma string hexadecimal e remove o "0." no início
  const randomId = randomNumber.toString(16).substring(2);
  return randomId;
};
