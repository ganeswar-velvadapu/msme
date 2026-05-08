import { GlobalConfig } from 'payload';

const HODMessage: GlobalConfig = {
    slug: 'hod-message',
    fields: [
        {
            name: 'hod_message',
            type: 'textarea',
            label: 'Enter HOD Message',
        },
        {
            name: "select_hod",
            type: "relationship",
            label: "Select HOD",
            relationTo: "faculty",
            admin: {
                allowCreate: false,
                isSortable: true
            }
        },
    ],
};

export default HODMessage;
