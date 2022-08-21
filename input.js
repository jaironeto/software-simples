import * as readLine from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
"use strict";
export default class Input {
    async input(arg) {
        const rl = readLine.createInterface({ input, output });
        let resul;
        if (arg === undefined) {
            resul = await rl.question('');
        }
        else {
            resul = await rl.question(arg);
        }
        rl.close();
        return resul;
    }
}
