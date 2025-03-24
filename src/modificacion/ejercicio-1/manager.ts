import * as fs from 'fs';
import { manageLog } from './managelog.js';
import { chechExecution } from './checkexecution.js';

/**
 * Function that manages the flow of the program
 */
export function manager() {
  if (!chechExecution(process.argv)) {
    throw Error("La llamada al programa debe tener al menos 4 parámetros");
  }

  const filePath: string = process.argv[2];
  const key: string = process.argv[3];

  manageLog(filePath, key);
}
