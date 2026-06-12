import { GlobalConfig } from 'payload';

const MTechAdmission: GlobalConfig = {
  slug: 'mtech-admissions',
  label: 'M.Tech Admissions',
  fields: [
    {
      name: 'specializations',
      type: 'array',
      label: 'Specializations',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Specialization Name',
          required: true,
        },
        {
          name: 'eligibility',
          type: 'array',
          label: 'Eligibility Criteria',
          fields: [
            {
              name: 'category',
              type: 'text',
              label: 'Category (e.g., MoE Fellowship, Self-Sponsored)',
            },
            {
              name: 'details',
              type: 'textarea',
              label: 'Eligibility Details',
            },
          ],
        },
        {
          name: 'admissionProcess',
          type: 'array',
          label: 'Admission Process',
          fields: [
            {
              name: 'type',
              type: 'text',
              label: 'Admission Type (e.g., Written Test, Interview, GATE score)',
            },
            {
              name: 'details',
              type: 'textarea',
              label: 'Admission Details',
            },
          ],
        },
        {
          name: 'brochure',
          type: 'relationship',
          relationTo: 'media',
          label: 'Upload Brochure PDF',
        },
      ],
    },
  ],
};

export default MTechAdmission;