import {Request, Response} from 'express';
import {COURSES} from "./db-data";
import {Course} from "../src/app/courses/model/course";


export function saveCourse(req: Request, res: Response) {

    const id = req.params["id"],
        changes = req.body;

    COURSES[id] = {
        ...COURSES[id],
        ...changes
    };

    res.status(200).json(COURSES[id]);

}

