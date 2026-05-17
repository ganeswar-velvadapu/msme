import { CollectionConfig } from "payload";

export const Placements: CollectionConfig = {
    slug: "placements",
    fields: [
        {
            name: "year",
            type: "number",
            label: "Enter Year"
        },
        {
            name: "btech_placements",
            type: "array",
            fields: [
                {
                    name: "registeredStudents",
                    type: "number",
                    label: "Number of students Registered "
                },
                {
                    name: "placedStudents",
                    type: "number",
                    label: "Number of students placed"
                },
                {
                    name: "minCTC",
                    type: "number",
                    label: "Min CTC"
                },
                {
                    name: "maxCTC",
                    type: "number",
                    label: "Max CTC"
                },
                {
                    name: "medianCTC",
                    type: "number",
                    label: "Median CTC"
                },
            ]
        },
        {
            name: "mtech_placements",
            type: "array",
            fields: [
                {
                    name: "registeredStudents",
                    type: "number",
                    label: "Number of students Registered "
                },
                {
                    name: "placedStudents",
                    type: "number",
                    label: "Number of students placed"
                },
                {
                    name: "minCTC",
                    type: "number",
                    label: "Min CTC"
                },
                {
                    name: "maxCTC",
                    type: "number",
                    label: "Max CTC"
                },
                {
                    name: "medianCTC",
                    type: "number",
                    label: "Median CTC"
                },
            ]
        },
        {
            name: "companiesHired",
            type: "array",
            label: "Companies Hired",
            fields: [
                {
                    name: "companyName",
                    type: "text",
                    label : "Name of the company"
                }
            ]
        }
    ]
}