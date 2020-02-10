import fs from "fs";
import http from "http";
import url from "url";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->

        res.write("Egyszerű Hello World!\n");

        // Tetszőleges html teg-ek és attribútumok beépítése:
        res.write("<span style='color: blue;'><i>Színes és dőlt Hello World!'</i></span>\n");

        res.write("String");
        let employeeName: string = "John Smith";
        res.write(`\n${employeeName}`);

        res.write("\n\nBoolean");
        let isPresent: boolean = true;
        res.write(`\n${isPresent}`);

        res.write("\n\nSzám");
        let first: number = 123;
        res.write(`\n${first}`);

        res.write("</pre></form></body></html>");
        res.end();
    }
}
