const os = require('node:child_process').execSync
const path = require('node:path')
const Client = require('ssh2-sftp-client')
const sftp = new Client()

// const project = 'k8-website'
const project = 'weart'
const config = {
  // host: '47.104.239.82',
  // port: '201',
  host: '59.110.159.153',
  port: '22',
  username: 'root',
  password: 'rootsports@!234',
}

const src = '/www/wwwroot/'

const randomNumber = new Date().getTime()

async function main() {
  try {
    console.log('打包中...')
    os('vite build --mode gjd')
    console.log('connect')

    await sftp.connect(config)
    await sftp.rename(`${src}${project}`, `${src}${project}-${randomNumber}`)

    console.log('上传中...')
    await sftp.uploadDir(
      path.resolve(__dirname, '../dist'),
      `${src}${project}`,
    )
    console.log('部署成功...')
    sftp.end()
  }
  catch (error) {
    sftp.end()
  }
}

main()
