import log from 'electron-log';
export function logInfo(tag: any, message: any) {
  log.info(tag + ' : ' + message);
}
