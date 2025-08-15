import { CollectionConfig } from 'payload';

const PhD_Admission: CollectionConfig = {
  slug: 'phd-admission',
  fields: [
    {
        name: 'name',
        type: 'text',
        label: 'Specialization Name',
    },
    {
        name:'type_of_scholarship',
        type: 'text',
        label:"Type of Scholarship"
    },
    {
        name: 'brochure_link',
        type: 'text',
        label: 'Brochure PDF Link',
    },
    {
        name:"admission",
        type:"textarea",
        label:"Enter Admission Description"
    },
  ],
};

export default PhD_Admission;
