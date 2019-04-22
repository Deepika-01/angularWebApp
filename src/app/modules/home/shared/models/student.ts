import {IDocument} from './documents';

/* Interface for Students */
export interface IStudent{
    id : Number;
    name : String;
    category : String;
    documentsList : IDocument[];
    dob : Date;
    father_name : String;
    mother_name:String;
    marks:number;
}