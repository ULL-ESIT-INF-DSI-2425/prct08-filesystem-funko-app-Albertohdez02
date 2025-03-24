import * as fs from "fs";
import { chechExecution } from "../ejercicio-1/checkexecution.js";
import { fileConverter } from "./fileconverter.js";

/**
 * Function that manages the flow of the program
 */
export function manager() {
  if (!chechExecution(process.argv)) {
    throw Error("La ejecución del programa debe tener al menos 4 parámetros");
  }

  const JSONFilePath: string = process.argv[2];
  const CVSFilePath: string = process.argv[3];

  fileConverter(JSONFilePath, CVSFilePath);
}
