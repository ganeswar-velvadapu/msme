import { CollectionConfig } from "payload";


export const BTech_P: CollectionConfig = {
    slug: "btech-p",
    labels: {
    singular: 'B.Tech. Programme',
    plural: 'B.Tech. Programmes',
  },
    fields: [
        {
            name:"about",
            type:"group",
            fields:[
                {
                    name: "about_btech_program",
                    type: "textarea",
                    label: "Enter about",
                },
                {
                    name: "program_section",
                    type: "group",
                    fields: [
                        {
                            name: "btech_program",
                            type: "text",
                            label: "Enter btech program"
                        },
                        {
                            name: "btech_program_descriptiom",
                            type: "textarea",
                            label: "Enter Description"
                        },
                    ],
                },
                {
                    name:"academic_handbook_link",
                    type:"relationship",
                    relationTo: "media",
                    label:"Upload Academic Handbook"
                }
            ]
        },
        {
          name: "curriculum",
          type: "group",
          fields: [
            {
              name: "about_curriculum",
              type: "array",
              fields: [
                {
                  name: "curriculum_description",
                  type: "textarea",
                  label: "Enter Description",
                },
              ],
            },
            {
              name: "curriculum_files",
              type: "array",
              label: "Curriculum Files",
              fields: [
                {
                  name: "curriculum_heading",
                  type: "text",
                  label: "Curriculum Heading",
                },
                {
                  name: "curriculum_file",
                  type: "relationship",
                  relationTo: "media",
                  label: "Upload Curriculum PDF",
                },
              ],
            },
          ],
        },
    ],
}