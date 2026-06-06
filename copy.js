const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'assests');
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
for (const file of files) {
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
}

// Rename them to the expected names
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
  const oldPath = path.join(destDir, oldName);
  const newPath = path.join(destDir, newName);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
  }
}
console.log('Done!');
