import { CollectionConfig } from "payload";

export const Placements: CollectionConfig = {
    slug: "placements",
    fields: [
        {
            name: "year",
            type: "number",
            required: true,
            label: "Enter Year"
        },
        {
            name: "btech_placements",
            type: "array",
            required: true,
            fields: [
                {
                    name: "registeredStudents",
                    type: "number",
                    required: true,
                    label: "Number of students Registered "
                },
                {
                    name: "placedStudents",
                    type: "number",
                    required: true,
                    label: "Number of students placed"
                },
                {
                    name: "minCTC",
                    type: "number",
                    required: true,
                    label: "Min CTC"
                },
                {
                    name: "maxCTC",
                    type: "number",
                    required: true,
                    label: "Max CTC"
                },
                {
                    name: "medianCTC",
                    type: "number",
                    required: true,
                    label: "Median CTC"
                },
            ]
        },
        {
            name: "mtech_placements",
            type: "array",
            required: true,
            fields: [
                {
                    name: "registeredStudents",
                    type: "number",
                    required: true,
                    label: "Number of students Registered "
                },
                {
                    name: "placedStudents",
                    type: "number",
                    required: true,
                    label: "Number of students placed"
                },
                {
                    name: "minCTC",
                    type: "number",
                    required: true,
                    label: "Min CTC"
                },
                {
                    name: "maxCTC",
                    type: "number",
                    required: true,
                    label: "Max CTC"
                },
                {
                    name: "medianCTC",
                    type: "number",
                    required: true,
                    label: "Median CTC"
                },
            ]
        },
        {
            name: "companiesHired",
            type: "array",
            label: "Companies Hired",
            required: true,
            fields: [
                {
                    name: "companyName",
                    type: "text",
                    required: true,
                    label : "Name of the company"
                }
            ]
        }
    ]
}