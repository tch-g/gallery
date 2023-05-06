export interface IPicture {
    id: string;
    title: string;
    imgName: string;
    file: any;
    fileReader: any;
}

export class Picture implements IPicture {
    constructor(value: IPicture) {
        if (!value) {
            throw Error('Picture value is null or undefined');
        }
        this.id = value.id;
        this.title = value.title;
        this.imgName = value.imgName;
        this.file = value.file;
        this.fileReader = value.fileReader;
    }

    id: string;
    title: string;
    imgName: string;
    file: any;
    fileReader: any;
}

export class CPicture {
    id!: string;
    title!: string;
    imgName!: string;
    file: any;
    fileReader: any;
}
