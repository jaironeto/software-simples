import {default as Menu_inicial} from './menu_inicial'

main();

function main(): void {
  const menu = new Menu_inicial();

  'inicial' + menu.escolha('start').then(resolve => {
    console.log(resolve)
    console.log('\n\nEm construção acabou\n\n')
  })
}

process.on('uncaughtException', err => {
  console.clear()
  if (err.name === 'SequelizeValidationError') {
    console.log('\nOcorreu um erro na criação dos dados, por favor tente novamente! O email deve ser no formato name@.com')
    setTimeout(() => { main() }, 10000)
  }
  else if (err.name === 'SequelizeUniqueConstraintError') {
    console.log('\nSenha Invalid')
    setTimeout(() => { main() }, 10000)
  }
  else {
    setTimeout(() => { console.log('ocorreu um erro desconhecido!'); process.exit(1) }, 5000)
  }
})