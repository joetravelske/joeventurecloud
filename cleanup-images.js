import { unlink, readdir } from 'fs/promises';
import { join, extname } from 'path';

const IMAGES_DIR = './public/images';

async function cleanupOriginalImages() {
    console.log('🧹 Starting cleanup of original image files...\n');

    const files = await readdir(IMAGES_DIR);
    const imageFiles = files.filter(file => {
        const ext = extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png'].includes(ext);
    });

    console.log(`Found ${imageFiles.length} original images to remove\n`);

    let deletedCount = 0;
    let totalSize = 0;

    for (const file of imageFiles) {
        const filePath = join(IMAGES_DIR, file);
        try {
            const { size } = await import('fs').then(fs => fs.promises.stat(filePath));
            await unlink(filePath);
            totalSize += size;
            deletedCount++;
            console.log(`✅ Deleted: ${file}`);
        } catch (error) {
            console.error(`❌ Error deleting ${file}:`, error.message);
        }
    }

    const totalMB = (totalSize / (1024 * 1024)).toFixed(2);

    console.log('\n' + '='.repeat(60));
    console.log('📊 Cleanup Summary');
    console.log('='.repeat(60));
    console.log(`Files deleted: ${deletedCount}/${imageFiles.length}`);
    console.log(`Space freed: ${totalMB} MB`);
    console.log('='.repeat(60));
    console.log('\n✨ Cleanup complete! Only WebP images remain.');
}

cleanupOriginalImages().catch(console.error);
