export default function generatePassword () {
  let password: string = ''
  let characters: string = 'Aa@$#123456789abcdefghijFGHIJKLMNOP!'
  let passwordLength: number = 8

  for(let i = 0; i < passwordLength; i++) {
    let randonNumber = Math.floor(Math.random() * characters.length)
    let char = characters.charAt(randonNumber)
    password += char
  }

  return password
}