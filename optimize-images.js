import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

const IMAGES_DIR = './public/images';
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 85;

async function getFileSize(filePath) {
    const stats = await stat(filePath);
    return stats.size;
}

function formatBytes(bytes) {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function optimizeImage(inputPath, outputPath) {
    try {
        const originalSize = await getFileSize(inputPath);

        await sharp(inputPath)
            .resize(MAX_WIDTH, null, {
                withoutEnlargement: true,
                fit: 'inside'
            })
            .webp({ quality: WEBP_QUALITY })
            .toFile(outputPath);

        const optimizedSize = await getFileSize(outputPath);
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

        return {
            original: formatBytes(originalSize),
            optimized: formatBytes(optimizedSize),
            savings: savings + '%'
        };
    } catch (error) {
        console.error(`Error processing ${inputPath}:`, error.message);
        return null;
    }
}

async function processImages() {
    console.log('🖼️  Starting image optimization...\n');

    const files = await readdir(IMAGES_DIR);
    const imageFiles = files.filter(file => {
        const ext = extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png'].includes(ext);
    });

    console.log(`Found ${imageFiles.length} images to optimize\n`);

    let totalOriginal = 0;
    let totalOptimized = 0;
    let successCount = 0;

    for (const file of imageFiles) {
        const inputPath = join(IMAGES_DIR, file);
        const outputPath = join(IMAGES_DIR, basename(file, extname(file)) + '.webp');

        // Skip if WebP already exists
        if (existsSync(outputPath)) {
            console.log(`⏭️  Skipping ${file} (WebP already exists)`);
            continue;
        }

        console.log(`Processing: ${file}`);
        const result = await optimizeImage(inputPath, outputPath);

        if (result) {
            console.log(`  ✅ ${result.original} → ${result.optimized} (saved ${result.savings})\n`);

            const origBytes = await getFileSize(inputPath);
            const optBytes = await getFileSize(outputPath);
            totalOriginal += origBytes;
            totalOptimized += optBytes;
            successCount++;
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 Optimization Summary');
    console.log('='.repeat(60));
    console.log(`Images processed: ${successCount}/${imageFiles.length}`);
    console.log(`Total original size: ${formatBytes(totalOriginal)}`);
    console.log(`Total optimized size: ${formatBytes(totalOptimized)}`);
    console.log(`Total savings: ${formatBytes(totalOriginal - totalOptimized)} (${((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1)}%)`);
    console.log('='.repeat(60));
    console.log('\n✨ Optimization complete!');
    console.log('\n⚠️  Note: Original files are kept. You can delete them after verifying the WebP versions.');
}

processImages().catch(console.error);
