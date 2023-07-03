import 'dotenv/config';
import {InstallGlobalCommands } from './utils.js';

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
};

const ALL_COMMANDS = [TEST_COMMAND];

InstallGlobalCommands(process.env.APP_ID as string, ALL_COMMANDS);
