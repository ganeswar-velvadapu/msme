import { CollectionConfig } from 'payload';

const MTechAdmission: CollectionConfig = {
  slug: 'mtech-admissions',
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
              required: true,
            },
            {
              name: 'details_mtech_ad',
              type: 'textarea',
              label: 'Eligibility Details',
              required: true,
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
              required: true,
            },
            {
              name: 'admission_details_mtech',
              type: 'textarea',
              label: 'Admission Details',
              required: true,
            },
          ],
        },
        {
          name: 'brochure_link_mtech',
          type: 'text',
          label: 'Brochure Link',
          required: false,
        },
      ],
    },
  ],
};

export default MTechAdmission;
