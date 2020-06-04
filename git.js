const cp = require('child_process');
cp.execSync('git add . | git commit -m "New update" | git push | npm publish')
//git add . | git commit -m "New update" | git push | npm publish