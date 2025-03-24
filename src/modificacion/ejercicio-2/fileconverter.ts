import * as fs from "fs";

/**
 * Function that turns a JSON file to a CVS file
 * @param JSONFilePath - path of the JSONFile (string)
 * @param CVSFilePath - path of the CVSFile (string)
 */
export function fileConverter(JSONFilePath: string, CVSFilePath: string) {
  let objects: object[] = [];

  fs.readFile(JSONFilePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error al leer el archivo: ${err.message}`);
      return;
    }

    objects = JSON.parse(data);

    if (objects.length == 0) {
      throw Error("El fichero JSON debe contener algun objeto");
    }

    const headers = Object.keys(objects[0]);
    const Rows = objects.map((obj) =>
      headers.map((attribute) => obj[attribute]).join("\t"),
    );
    const content = [headers.join("\t"), ...Rows].join("\n");

    fs.writeFile(CVSFilePath, content, "utf8", (err) => {
      if (err) {
        console.error(`Error al escribir el archivo CSV: ${err.message}`);
        return;
      }
      console.log(`Conversion del archivo JSON (${JSONFilePath}) a tipo CVS correcta.\n`)
      console.log(`Archivo CSV guardado en: ${CVSFilePath}\n`);
    });
  });
}
