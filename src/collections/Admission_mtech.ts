import { CollectionConfig } from 'payload';

const MTech_Admission: CollectionConfig = {
  slug: 'mtech-admission',
  fields: [
    {
      name: 'specializations',
      type: 'array',
      label: 'Specializations',
      fields: [
        {
          name: 'name',
          type: 'array',
          label: 'Specialization Name',
          fields : [
            {
            name:'type_of_scholarship', 
            type: 'text',
            label:"Type of Scholarship"
        },
        {
            name:"admission",
            type:"textarea",
            label:"Enter Admission Description"
        },
    ]
        },
        
      ],
    },
  ],
};

export default MTech_Admission;
