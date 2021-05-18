const os = require('os')
const builder = require('electron-builder')

const Platform = builder.Platform
const { name, productName } = require('../package.json')

let targets
var platform = os.platform()

if (platform == 'darwin') {
  targets = Platform.MAC.createTarget()
} else if (platform == 'win32') {
  targets = Platform.WINDOWS.createTarget()
} else if (platform == 'linux') {
  targets = Platform.LINUX.createTarget()
}

const config = {
  appId: `com.yjing.${name}`,
  copyright: 'Copyright ©202 shanxaji@163.com',
  asar: true,
  // compression: 'store',
  productName,
  directories: {
    output: '../build/',
  },
  files: [
    'icons/icon.*',
    './dist/**/*',
    '!./dist/web/**/*'
  ],
  dmg: {
    contents: [
      {
        path: '/Applications',
        type: 'link',
        x: 410,
        y: 230,
      },
      {
        type: 'file',
        x: 130,
        y: 230,
      },
    ],
    window: {
      height: 380,
      width: 540,
    },
  },
  linux: {
    icon: 'icons/icon.png',
    target: ['deb', 'snap','rpm','AppImage'],
  },
  mac: {
    category: 'public.app-category.utilities',
    icon: '/icon.icns',
    target: ['dmg', 'zip'],
    type: 'distribution',
  },
  win: {
    icon: 'icons/icon.ico',
    target: ['nsis', 'zip', 'portable'],
  },
  nsis: {
    allowToChangeInstallationDirectory: true,
    oneClick: false,
  },
}

builder
  .build({
    targets,
    config,
  })
  .then((m) => {
    console.log(m)
  })
  .catch((e) => {
    console.error(e)
  })
