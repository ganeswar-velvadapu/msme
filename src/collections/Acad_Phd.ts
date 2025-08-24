import { CollectionConfig } from 'payload';

const PhD_P: CollectionConfig = {
  slug: 'phd-p',
  labels: {
    singular: 'PhD Programme',
    plural: 'PhD Programmes',
  },
  fields: [
    {
      name: 'about',
      type: 'textarea',
      label: 'About the PhD Program',
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
};

export default PhD_P;
