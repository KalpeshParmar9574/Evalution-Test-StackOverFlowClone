import { Time } from "@angular/common"

export interface askQuestion{
    userID: number,
    userName: string,
    vote: number,
    view: number,
    title: string,
    qDescrition: string,
    tryandExpectation: string,
    tags: any,
    alreadyExiste: string
    createdAt: string
    answers:any
}