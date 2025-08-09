// npm install sharp glob - устанавливаем зависимости
// node convert-images.mjs - запускаем скрипт !скрипт удаляет оригиналы картинок

import fs from 'fs';
import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import sharp from 'sharp';

// Получаем путь к текущему файлу
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Конвертация в webp и удаление оригинала
async function convertToWebp(filePath) {
    const ext = path.extname(filePath);
    const fileName = path.basename(filePath, ext);
    const outputFile = join(path.dirname(filePath), `${fileName}.webp`);

    try {
        await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outputFile);

        console.log(`✅ ${filePath} → ${outputFile}`);

        // Удаляем оригинал
        fs.unlinkSync(filePath);
        console.log(`🗑 Удалён оригинал: ${filePath}`);
    } catch (err) {
        console.error(`❌ Ошибка при обработке ${filePath}:`, err);
    }
}

// Замена ссылок на изображения в HTML/CSS
async function updateFileReferences(extensions, fileTypes) {
    const files = await glob(`**/*.{${fileTypes.join(',')}}`, { ignore: 'node_modules/**' });

    if (files.length === 0) {
        console.log(`⚠ Файлы ${fileTypes.join(', ')} не найдены.`);
        return;
    }

    for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');
        let replaced = false;

        extensions.forEach(ext => {
            const regex = new RegExp(`\\.${ext}`, 'gi');
            if (regex.test(content)) replaced = true;
            content = content.replace(regex, '.webp');
        });

        if (replaced) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`🔄 Обновлены ссылки в ${path.relative(__dirname, file)}`);
        }
    }
}

// Основная функция
async function main() {
    console.log('🔍 Ищу изображения...');
    const imageFiles = await glob('**/*.{jpg,jpeg,png}', { ignore: 'node_modules/**' });

    if (imageFiles.length === 0) {
        console.log('⚠ Изображения JPG/PNG не найдены.');
        return;
    }

    console.log(`📦 Найдено изображений: ${imageFiles.length}`);
    await Promise.all(imageFiles.map(file => convertToWebp(file)));

    console.log('✏ Обновляю HTML и CSS...');
    await updateFileReferences(['jpg', 'jpeg', 'png'], ['html', 'css', 'scss']);

    console.log('✅ Готово!');
}

main();
