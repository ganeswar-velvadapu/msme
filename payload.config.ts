// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from '@/collections/Users'
import { Media } from '@/collections/Media'
import { Placements } from '@/collections/Placements'
import { HomeCarousel } from '@/globals/HomeCarousel'
import { News } from '@/collections/News'
import { Events } from '@/collections/Events'
import { ResearchAreas } from '@/collections/ResearchAreas'
import { ResearchFacilities } from '@/collections/ResearchFacilities'
import { ResearchFacilitiesCarousel } from '@/collections/ResearchFacilitiesCarousel'
import { Projects } from '@/collections/Projects'
import { Collaborations } from '@/collections/Collaborations'
import { Faculty } from '@/collections/Faculty'
import { Staff } from '@/collections/Staff'
import { BTech } from '@/collections/BTech'
import { MTech } from '@/collections/MTech'
import { PhD } from '@/collections/PhD'
import { Alumni } from '@/collections/Alumni'
import { About } from '@/globals/About'
import { BTech_P } from '@/collections/Acad_Btech';


import MTech_P from '@/collections/Acad_Mtech'
import PhD_P from '@/collections/Acad_Phd'
import MTechAdmission from '@/globals/MTech_Admission'
import BTechAdmission from '@/globals/BTech_Admission'
import PhDAdmission from '@/globals/PhD_Admissions'



const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },

  },
  collections: [Users, Media, Placements, News, Events, ResearchAreas, ResearchFacilities, ResearchFacilitiesCarousel, Projects, Collaborations, Faculty, Staff, BTech, MTech, PhD, Alumni, BTech_P, MTech_P, PhD_P],
  globals: [HomeCarousel, About,MTechAdmission,BTechAdmission,PhDAdmission],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})

