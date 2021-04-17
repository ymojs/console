import { LOG_COLORS, LOG_TYPE_LOG, LOG_TYPE_ERROR, LOG_TYPE_WARNING } from './constants';

export interface IConsoleInitOptions {
  env: string
}

const consoleLog = global.console.log;

function ymoLog(logType: string, ...args) {
  const color = LOG_COLORS[logType];
  consoleLog(color(`[${logType}] `, ...args));
  // try {
  //   throw new Error('empty')
  // } catch (e) {
  //   console.log(1111)
  //   const stack = 
  //     e.stack
  //     .trim()
  //     .split('\n')
  //     .map((line: string) => line.trim())
  //     .filter((line: string) => line.startsWith('at '));
  //   const current = stack[2].match(/at\s(.*\()?(.*:\d+:\d+)(\))?$/)[2]
  //   const color = LOG_COLORS[logType];
  //   consoleLog(color(`[${logType}] `, ...args));
  // }
}

const Console = {
  init: function(options: IConsoleInitOptions) {
    const { env } = options;
    if (env === 'development' || env === 'debug') {
      global.console.log = function(...args) {
        ymoLog(LOG_TYPE_LOG, ...args);
      }
      global.console.warn = function(...args) {
        ymoLog(LOG_TYPE_WARNING, ...args);
      }
      global.console.error = function(...args) {
        ymoLog(LOG_TYPE_ERROR, ...args);
      }
    }
  }
}

export default Console;