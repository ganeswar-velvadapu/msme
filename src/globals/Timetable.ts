import { GlobalConfig } from "payload";

export const TimeTable:GlobalConfig = {
    slug : "timetable",
    fields : [
        {
            name : "time_table",
            type : "array",
            label : "Time Table",
            fields : [
                {
                    name : "time_table_year",
                    type : "text",
                    label : "Enter tenure"
                },
                {
                    name : "time_table_link",
                    type : "text",
                    label : "Enter time table link"
                },
            ]
        }
    ]
}