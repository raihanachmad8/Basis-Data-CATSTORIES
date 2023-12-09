import { fileURLToPath } from "url";
import { dirname, join } from "path";
export function getDirname(importMetaUrl = import.meta.url) {
    if (importMetaUrl.startsWith("file://")) {
        // Handle Node.js environment
        const __filename = fileURLToPath(importMetaUrl);
        return dirname(__filename);
    } else {
        // Handle other environments (e.g., Jest)
        return process.cwd();
    }
}
