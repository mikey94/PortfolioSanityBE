import {defineField, defineType} from 'sanity'


export default defineType({
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        defineField({
            name: 'skill',
            title: 'Skill',
            type: 'string',
        }),
        defineField({
            name: 'percentage',
            title: 'Percentage',
            type: 'number',
            validation: Rule => Rule.required().min(0).max(100)
        }),

    ]
})