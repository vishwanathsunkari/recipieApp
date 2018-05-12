

export interface Ingredient {
    ingredient: string;
    measure: string;
}

export interface Instruction {
    instructions: string;
    photo: string;
}

export class Recipie {
public title: string;
public description: string;
public ingredients: Ingredient[];
public instructions: Instruction[];
public cover_photo: string;

constructor(t: string, d: string, ing: Ingredient[], inst: Instruction[], cv: string) {
this.title = t;
this.description = d;
this.ingredients = ing;
this.instructions = inst;
this.cover_photo = cv;
}

}


