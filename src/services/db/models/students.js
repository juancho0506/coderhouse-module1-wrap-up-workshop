import mongoose from 'mongoose';

const collectionName = 'students';

const stringTypeSchemaUniqueRequired = {
    type: String,
    unique: true,
    required: true
};

const stringTypeSchemaNonUniqueRequired = {
    type: String,
    required: true
};


const studentSchema = new mongoose.Schema({
    name: stringTypeSchemaNonUniqueRequired,
    lastName: stringTypeSchemaNonUniqueRequired,
    age: stringTypeSchemaNonUniqueRequired,
    courses: {
        type:Array,
        default:[]
    }
    
});

export const studentsModel = mongoose.model(collectionName, studentSchema);