#!/usr/bin/env node
import makeWelcome from '../src/cli.js';

import even from '../src/games/even.js';
import calc from "../src/games/calc.js";
import gcd from '../src/games/gcd.js';
import progression from '../src/games/progression.js';
import prime from '../src/games/prime.js';

makeWelcome();

even();
calc();
gcd();
progression();
prime();