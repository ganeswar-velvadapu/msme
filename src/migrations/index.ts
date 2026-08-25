import * as migration_20260612_115310 from './20260612_115310';
import * as migration_20260709_111540 from './20260709_111540';
import * as migration_20260825_064243 from './20260825_064243';
import * as migration_20260825_064756 from './20260825_064756';

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
    name: '20260825_064756'
  },
];
