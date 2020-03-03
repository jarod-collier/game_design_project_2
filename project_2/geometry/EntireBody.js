// import createContext from 'gl-context';
import GLGeometry from 'gl-geometry';
import { mat4, glMatrix } from 'gl-matrix';
import Head from "./Head";
import ObjectGroup from "../core/ObjectGroup";

let head, headCF;

export default class EntireBody extends ObjectGroup {
    constructor({glContext, positionAttribute, colorAttribute}) {
        super();

        headCF = mat4.create();

        // Creates the head
        const headTriangles = 12;
        const headShape = new Head({
            length: 1,
            height: 1,
            width: 1
        });

        let headColors = [];
        for (let k = 0; k < headTriangles; k++) {
            if (k % 4 == 0) headColors.push(.3, 0, .8);
            else if (k % 4 == 1) headColors.push(1, 1, 1);
            else if (k % 4 == 2) headColors.push(.7, .1, 0);
            else headColors.push(.3, .9, .2);
        }

        head = new GLGeometry(glContext)
            .attr('vertexPos', headShape.geometry())
            .attr('vertexCol', headColors);
        this.add({object: head, frame: headCF});

    }
}
