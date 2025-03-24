import * as fs from "fs";

/**
 * Function that prints the ocurrencies of a word in a file
 */
export function manageLog(filePath: string, key: string) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error al leer el archivo: ${err.message}`);
      return;
    }

    const regex = new RegExp(`${key}`, 'g');
    const matches = data.match(regex);
    const count = matches ? matches.length : 0;

    console.log("La palabra " + key + " aparece " + count + " veces en el fichero " + filePath);
  })
}