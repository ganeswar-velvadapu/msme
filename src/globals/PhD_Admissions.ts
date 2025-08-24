import { GlobalConfig } from 'payload';

const PhDAdmission: GlobalConfig = {
  slug: 'phd-admissions',
  fields: [
    {
      name: 'fellowships_phd_root',
      type: 'array',
      label: 'Fellowships',
      fields: [
        {
          name: 'fellowship_phd',
          type: 'text',
          label: 'Fellowship Name',
          required: true,
        },
        {
          name: 'fellowship_phd_link',
          type: 'text',
          label: 'Fellowship Link',
          required: true,
        },
      ],
    },
    {
      name: 'brochure_link_phd',
      type: 'text',
      label: 'PhD Brochure Link',
      required: true,
    },
    {
      name: 'admission_process_phd',
      type: 'textarea',
      label: 'Admission Process',
      required: true,
      admin: {
        description:
          'For details, refer to the respective PhD brochures and fellowship links.',
      },
    },
  ],
};

export default PhDAdmission;
