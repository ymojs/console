import chalk from 'chalk';

export const LOG_TYPE_LOG = 'log';
export const LOG_TYPE_WARNING = 'warning';
export const LOG_TYPE_ERROR = 'error';
export const LOG_TYPE_SUCCESS = 'success';

export const LOG_COLORS = {
  [`${LOG_TYPE_LOG}`]: chalk.cyanBright,
  [`${LOG_TYPE_WARNING}`]: chalk.yellow,
  [`${LOG_TYPE_ERROR}`]: chalk.redBright,
  [`${LOG_TYPE_SUCCESS}`]: chalk.green
};