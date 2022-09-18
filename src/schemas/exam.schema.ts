import joi from 'joi';

const exam = joi.object({
    name: joi.string().required(),
    pdfUrl: joi.string().uri().required(),
    categoryId: joi.number().greater(0).required(),
    disciplineId: joi.number().greater(0).required(),
    teacherDisciplineId: joi.number().greater(0).required(),
});

export { exam };