export const convertCPF = (cpf) => {
    const numbers1 = cpf.substring(0,3)
    const numbers2 = cpf.substring(3,6)
    const numbers3 = cpf.substring(6,9)
    const digits = cpf.substring(9,11)

    return `${numbers1}.${numbers2}.${numbers3}-${digits}`
  }


