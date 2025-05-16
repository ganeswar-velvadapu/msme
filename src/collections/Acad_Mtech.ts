import { CollectionConfig } from 'payload';

const MTech_P: CollectionConfig = {
  slug: 'mtech-p',
  fields: [
    {
      name: 'about',
      type: 'textarea',
      label: 'About MTech Program',
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
          type: 'text',
          label: 'Brochure PDF Link',
        },
        {
          name: 'course_and_thesis',
          type: 'textarea',
          label: 'Course and Thesis Requirements',
        },
        {
          name: 'eligibility_and_admissions',
          type: 'textarea',
          label: 'Eligibility and Admissions',
        },
      ],
    },
  ],
};

export default MTech_P;
