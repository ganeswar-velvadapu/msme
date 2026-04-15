import { GlobalConfig } from 'payload';

const PhDAdmission: GlobalConfig = {
  slug: 'phd-admissions',
  label: 'PhD Admissions',

  fields: [

    // GLOBAL WRITE-UP
    {
      name: 'general_writeup',
      type: 'textarea',
      label: 'General Write-up',
      admin: {
        description: 'General PhD programme description'
      }
    },

    // GLOBAL EXTERNAL FELLOWSHIPS
    {
      name: 'external_fellowships',
      type: 'array',
      label: 'Other Fellowships',

      fields: [
        {
          name: 'link_name',
          type: 'text',
          label: 'Fellowship Name'
        },
        {
          name: 'link_url',
          type: 'text',
          label: 'Fellowship URL'
        }
      ]
    },

    // PhD TYPES (MoE, Project Sponsored etc.)
    {
      name: 'phd_types',
      type: 'array',
      label: 'PhD Types',

      fields: [

        {
          name: 'phd_type_name',
          type: 'text',
          label: 'PhD Type Name',
          admin: {
            description: 'e.g., MoE, Project Sponsored'
          }
        },

        {
          name: 'eligibility',
          type: 'textarea',
          label: 'Eligibility Criteria'
        },

        {
          name: 'admission_process',
          type: 'textarea',
          label: 'Admission Process'
        },

        {
          name: 'brochure_links',
          type: 'array',
          label: 'Brochure Links',

          fields: [
            {
              name: 'link_text',
              type: 'text',
              label: 'Link Text'
            },
            {
              name: 'link_url',
              type: 'text',
              label: 'Link URL'
            }
          ]
        },
      ]
    },

    {
      name: 'faculty_research',
      type: 'array',
      label: 'Faculty Research Areas',

      fields: [
        {
          name: 'faculty_name',
          type: 'text',
          label: 'Faculty Name',
          required: true,
        },

        {
          name: 'research_topics',
          type: 'array',
          label: 'Research Topics',

          fields: [
            {
              name: 'topic',
              type: 'text',
              label: 'Research Topic',
              required: true,
            },
          ],
        },
      ],
    },

  ]
};

export default PhDAdmission;