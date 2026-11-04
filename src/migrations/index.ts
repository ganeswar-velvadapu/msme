import * as migration_20260612_115310 from './20260612_115310';
import * as migration_20260709_111540 from './20260709_111540';
import * as migration_20260825_064243 from './20260825_064243';
import * as migration_20260825_064756 from './20260825_064756';
import * as migration_20260924_184021 from './20260924_184021';
import * as migration_20260924_184344 from './20260924_184344';
import * as migration_20260924_185233 from './20260924_185233';
import * as migration_20261104_171930 from './20261104_171930';
import * as migration_20261104_172458 from './20261104_172458';

export const migrations = [
  {
    up: migration_20260612_115310.up,
    down: migration_20260612_115310.down,
    name: '20260612_115310',
  },
  {
    up: migration_20260709_111540.up,
    down: migration_20260709_111540.down,
    name: '20260709_111540',
  },
  {
    up: migration_20260825_064243.up,
    down: migration_20260825_064243.down,
    name: '20260825_064243',
  },
  {
    up: migration_20260825_064756.up,
    down: migration_20260825_064756.down,
    name: '20260825_064756',
  },
  {
    up: migration_20260924_184021.up,
    down: migration_20260924_184021.down,
    name: '20260924_184021',
  },
  {
    up: migration_20260924_184344.up,
    down: migration_20260924_184344.down,
    name: '20260924_184344',
  },
  {
    up: migration_20260924_185233.up,
    down: migration_20260924_185233.down,
    name: '20260924_185233',
  },
  {
    up: migration_20261104_171930.up,
    down: migration_20261104_171930.down,
    name: '20261104_171930',
  },
  {
    up: migration_20261104_172458.up,
    down: migration_20261104_172458.down,
    name: '20261104_172458'
  },
];
