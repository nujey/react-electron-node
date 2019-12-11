const fs  = require('fs')

const PROCESS__ARGV = process.argv;
const PROCESS__NPMPARAMS = process.env.npm_config_argv;

function handleFile() {
  // 获取到的JSON文件
  const data = fs.readFileSync(__dirname + '/env.json', 'utf-8');
  // npm命令行获取到的参数
  const npmParamsArr = JSON.parse(PROCESS__NPMPARAMS).remain
  for(let value of npmParamsArr.values()) {
    for(let item in JSON.parse(data)) {
      if (value === item) {
        const content = `FILENAME=${JSON.parse(data)[item]}`
        fs.writeFile(__dirname + `/${item}.env`, content, err => {
          console.log(err)
        })
      }
    }
  }
}

handleFile()
