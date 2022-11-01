import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import updateLog from './updatelog.js';
import { execSync } from 'child_process';

const rootPath = process.cwd()
console.log(rootPath)

import fs from 'fs';
//
// console.log(13123)

async function release () {
    const flag = process.argv[2] ?? 'z';
    const packageJson = require('../package.json');
    console.log(packageJson.version)
    let [x, y, z] = packageJson.version.split('.').map(Number);
    switch (flag) {
        case  'x':
            x += 1
            y = 0
            z = 0
            break;
        case  'y':
            y += 1
            z = 0
            break;
        case  'z':
            z += 1
            break;
        default:
            console.log(`命令参数错误 flag "${flag}" 只能是 x / y / z中的一个`);
            process.exit(1);
    }

    const newVersion = `${x}.${y}.${z}`
    packageJson.version = newVersion
    const nextTag = `v${newVersion}`

    await updateLog(nextTag, 'release');
    // 将新版号码写入 package.json 文件
    fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));

    // 提交修改的文件，打 tag 标签（tag 标签是为了触发 github action 工作流）并推送到远程
    execSync('git add ./package.json ./UPDATE_LOG.md');
    execSync(`git commit -m "v${newVersion}"`);
    execSync(`git tag -a v${newVersion} -m "v${newVersion}"`);
    execSync(`git push`);
    execSync(`git push origin v${newVersion}`);
    console.log(`Publish Ok...`);

}



release().catch(console.error)
