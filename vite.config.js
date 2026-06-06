import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig(() => {
  // We'll copy the images from assests to public/images during dev/build
  const copyImages = () => {
    const srcDir = path.resolve(__dirname, 'assests');
    const destDir = path.resolve(__dirname, 'public', 'images');

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    if (fs.existsSync(srcDir)) {
      const renames = {
        'mainBg.jpg': 'ekalaivan-hero-fullbody.jpg',
        'portrait.jpg': 'ekalaivan-profile-closeup.jpg',
        'onStagePerformance.jpg': 'ekalaivan-performing-stage.jpg',
        'subBg.jpg': 'ekalaivan-studio-session.jpg',
        'goatedTrack.jpg': 'album-oru-vaipu-cover.jpg',
        'spotify1.jpg': 'album-boomshakalaka-cover.jpg',
        'spotify2.jpg': 'album-nillave-vaa-cover.jpg',
        'stageMoment.jpg': 'album-penne-oru-mutham-thaa-cover.jpg'
      };

      for (const [oldName, newName] of Object.entries(renames)) {
        const oldPath = path.join(srcDir, oldName);
        if (fs.existsSync(oldPath)) {
          fs.copyFileSync(oldPath, path.join(destDir, newName));
        }
      }
    }

    // Copy generated images
    const brainDir = '/home/riknesh/.gemini/antigravity/brain/c9e09562-c005-41e5-91b8-f18e4da94df3';
    const generated = [
      { prefix: 'album_ethaya_rani_cover', newName: 'album-ethaya-rani-cover.jpg' },
      { prefix: 'album_intro_cover', newName: 'album-intro-cover.jpg' },
      { prefix: 'album_useless_cover', newName: 'album-useless-cover.jpg' },
      { prefix: 'album_miss_you_cover', newName: 'album-miss-you-cover.jpg' }
    ];

    if (fs.existsSync(brainDir)) {
      const files = fs.readdirSync(brainDir);
      for (const gen of generated) {
        const file = files.find(f => f.startsWith(gen.prefix) && f.endsWith('.png'));
        if (file) {
          fs.copyFileSync(path.join(brainDir, file), path.join(destDir, gen.newName));
        }
      }
    }
  };

  copyImages();

  return {
    plugins: [react()],
  };
});
