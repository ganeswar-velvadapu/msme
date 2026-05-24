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
};

export default PhD_P;
