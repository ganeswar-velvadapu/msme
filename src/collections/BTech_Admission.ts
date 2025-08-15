import { CollectionConfig } from 'payload';

const BTechAdmission: CollectionConfig = {
  slug: 'btech-admissions',
  fields: [
    {
      name: 'admission_process_btech',
      type: 'textarea',
      label: 'Admission Process',
      admin: {
        description:
          'Admission to the MSME BTech program is through JEE (Main and Advanced). For details, refer to the JEE website.',
      },
    },
    {
      name: 'link_to_jee_website',
      type: 'text',
      label: 'Link to JEE Website',
      admin: {
        description: 'Link to JEE website for more details.',
      },
    },
  ],
};

export default BTechAdmission;
