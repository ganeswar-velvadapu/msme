import { GlobalConfig } from 'payload';

const PhDAdmission: GlobalConfig = {
  slug: 'phd-admissions',
  label: 'PhD Admissions',
  fields: [
    {
      name: 'fellowships_phd',
      type: 'array',
      label: 'PhD Fellowships',
      fields: [
        {
          name: 'fellowship_type',
          type: 'text',
          label: 'Fellowship Type',
          required: true,
          admin: {
            description: 'e.g., MoE, Project sponsored Fellowships, etc.'
          }
        },
        {
          name: 'fellowship_description',
          type: 'richText',
          label: 'Fellowship Description',
          admin: {
            description: 'Details about the fellowship including eligibility, requirements, etc.'
          }
        },
        {
          name: 'brochure_links',

          type: 'array',
          label: 'Brochure Links',
          fields: [
            {
              name: 'link_text',
              type: 'text',
              label: 'Link Text',
              required: true,
              admin: {
                description: 'e.g., "Check brochure for details (PDF link)"'
              }
            },
            {
              name: 'link_url',
              type: 'text',
              label: 'Link URL',
              required: true,
              admin: {
                description: 'Full URL to the PDF or webpage'
              }
            }
          ]
        },
        {
          name: 'additional_links',
          type: 'array',
          label: 'Additional Links',
          fields: [
            {
              name: 'link_name',
              type: 'text',
              label: 'Link Name',
              required: true,
              admin: {
                description: 'e.g., CSIR-UGC NET JRF, INSPIRE, etc.'
              }
            },
            {
              name: 'link_url',
              type: 'text',
              label: 'Link URL',
              required: true
            },
            {
              name: 'link_description',
              type: 'text',
              label: 'Link Description',
              admin: {
                description: 'Brief description of what this link provides'
              }
            }
          ]
        }
      ]
    },

  ]
};

export default PhDAdmission;