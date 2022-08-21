import * as readLine from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

"use strict"
export default class Input {

  protected async input<type extends string>(): Promise<string>
  protected async input<type extends string>(arg: type): Promise<string>
  protected async input<type extends string>(arg?: type): Promise<string> {

    const rl: readLine.Interface = readLine.createInterface({ input, output })
    let resul: string

    if(arg === undefined){  resul = await rl.question('') }
    else{ resul = await rl.question(arg)}
    
    rl.close();
    return resul
  }
}