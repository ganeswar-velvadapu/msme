import * as migration_20260612_115310 from './20260612_115310';
import * as migration_20260709_111540 from './20260709_111540';

export const migrations = [
  {
    up: migration_20260612_115310.up,
    down: migration_20260612_115310.down,
    name: '20260612_115310',
  },
  {
    up: migration_20260709_111540.up,
    down: migration_20260709_111540.down,
    name: '20260709_111540'
  },
];
