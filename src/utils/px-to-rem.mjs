import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Базовый размер шрифта (1rem = 16px)
const baseFontSize = 16;

// Функция перевода px → rem
function pxToRem(match, value) {
    const px = parseFloat(value);
    const remValue = (px / baseFontSize).toFixed(4); // до 4 знаков после запятой
    return `${remValue}rem`;
}

// Замена во всех CSS/SCSS
async function convertPxToRem() {
    const files = await glob('**/*.{css,scss}', { ignore: 'node_modules/**' });

    if (files.length === 0) {
        console.log('⚠ CSS/SCSS файлы не найдены.');
        return;
    }

    files.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');

        // Ищем значения вида 12px, 0.5px и т.д.
        const updatedContent = content.replace(/(\d*\.?\d+)px\b/g, pxToRem);

        if (content !== updatedContent) {
            fs.writeFileSync(file, updatedContent, 'utf8');
            console.log(`🔄 Обновлён файл: ${path.relative(__dirname, file)}`);
        }
    });

    console.log('✅ Конвертация завершена.');
}

convertPxToRem();
