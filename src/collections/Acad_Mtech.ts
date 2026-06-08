import { CollectionConfig } from 'payload';

const MTech_P: CollectionConfig = {
  slug: 'mtech-p',
  labels: {
    singular: 'M.Tech. Programme',
    plural: 'M.Tech. Programmes',
  },
  fields: [
    {
      name: 'about',
      type: 'textarea',
      label: 'About M.Tech. Program',
    },
    {
      name: 'specializations',
      type: 'array',
      label: 'Specializations',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Specialization Name',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Program Description',
        },
        {
          name: 'brochure_link',
          type: 'relationship',
          relationTo: 'media',
          label: 'Upload Brochure PDF',
        },
        {
          name: 'curriculum_link',
          type: 'relationship',
          relationTo: 'media',
          label: 'Upload Curriculum PDF',
        },
        {
          name: 'course_and_thesis',
          type: 'textarea',
          label: 'Course and Thesis Requirements',
        },
      ],
    },
  ],
};

export default MTech_P;
