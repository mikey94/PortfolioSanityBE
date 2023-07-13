import {defineField, defineType} from 'sanity'


export default defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'id',
            title: 'Id',
            type: 'number',
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string'
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                }
            ]
        }),
        defineField({
            name: 'link',
            title: 'Project Link',
            type: 'string',
        })

    ]
})