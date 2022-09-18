import joi from 'joi';

const exam = joi.object({
    name: joi.string().required(),
    pdfUrl: joi.string().uri().required(),
    categoryId: joi.number().strict().greater(0).required(),
    teacherDisciplineId: joi.number().strict().greater(0).required(),
});

export { exam };