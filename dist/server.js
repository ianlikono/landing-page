"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const path_1 = require("path");
const url_1 = require("url");
const port = Number(process.env.PORT) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next_1.default({ dir: ".", dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = express_1.default();
    server.get("*", (req, res) => {
        const rootStaticFiles = ["/robots.txt", "/sitemap.xml", "/favicon.ico"];
        const parsedUrl = url_1.parse(req.url, true);
        //@ts-ignore
        if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
            //@ts-ignore
            const path = path_1.join(__dirname, "static", parsedUrl.pathname);
            app.serveStatic(req, res, path);
        }
        else {
            handle(req, res, parsedUrl);
        }
    });
    server.listen(port, (err) => {
        if (err)
            throw err;
        console.log(`> Ready on 🚀 http://localhost:${port}`);
    });
});
//# sourceMappingURL=server.js.map