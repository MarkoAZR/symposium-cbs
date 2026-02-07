import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Eliminar favicon.ico antiguo
const faviconPath = path.join(__dirname, 'public', 'favicon.ico');
if (fs.existsSync(faviconPath)) {
    fs.unlinkSync(faviconPath);
    console.log('✓ favicon.ico antiguo eliminado');
}

console.log('✓ El navegador ahora usará cbs_logo.svg como favicon');
