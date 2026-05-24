import { GlobalConfig } from 'payload';

const MTechAdmission: GlobalConfig = {
  slug: 'mtech-admissions', // unique identifier for this global
  label: 'M.Tech Admissions', // optional: label for admin panel
  fields: [
    {
      name: 'specializations_mtech',
      type: 'array',
      label: 'Specializations',
      fields: [
        {
          name: 'name_mtech_ad',
          type: 'text',
          label: 'Specialization Name',
          required: true,
        },
        {
          name: 'eligibility_mtech_ad',
          type: 'array',
          label: 'Eligibility Criteria',
          fields: [
            {
              name: 'category_mtech_ad',
              type: 'text',
              label: 'Category (e.g., MoE Fellowship, Self-Sponsored)',
            },
            {
              name: 'details_mtech_ad',
              type: 'textarea',
              label: 'Eligibility Details',
            },
          ],
        },
        {
          name: 'admission_process_mtech',
          type: 'array',
          label: 'Admission Process',
          fields: [
            {
              name: 'admission_type_mtech',
              type: 'text',
              label: 'Admission Type (e.g., Written Test, Interview, GATE score)',
            },
            {
              name: 'admission_details_mtech',
              type: 'textarea',
              label: 'Admission Details',
            },
          ],
        },
        {
          name: 'brochure_link_mtech',
          type: 'relationship',
          relationTo: 'media',
          label: 'Upload Brochure PDF',
        },
      ],
    },
  ],
};

export default MTechAdmission;
