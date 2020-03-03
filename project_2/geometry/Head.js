import GeometricObject from './GeometricObject';

export default class Head extends GeometricObject {
    /* Create a cone with a given number of slices and height

       The cone base is a circle on the XY-plane centered at (0,0,0),
       the cone tip is on the Z-axis at (0,0,height)
     */
    constructor({ length = .5, height = .5, width = .5}) {
        super();

        /* Bottom front left */
        this.vertices.push([width, length, 2]);

        /* 1) Bottom front right */
        this.vertices.push([width, length * 2, 2]);

        /* 2) top front right */
        this.vertices.push([width, length * 2, height + 2]);

        /* 3) top front left */
        this.vertices.push([width, length, height + 2]);

        /* 4) Bottom back right */
        this.vertices.push([0, length * 2, 2]);

        /* 5) Bottom back left */
        this.vertices.push([0, length, 2]);

        /* 6) top back right */
        this.vertices.push([0, length * 2, height + 2]);

        /* 7) top back left */
        this.vertices.push([0, length, height + 2]);

        // Pushing the triangles
        // Triangle 1 front bottom
        this.triangles.push([0, 1, 2]);

        //Triangle 2 front top
        this.triangles.push([0, 2, 3]);

        // Triangle 3 right bottom
        this.triangles.push([1, 4, 6]);

        // Triangle 4 right top
        this.triangles.push([1, 6, 2]);

        // Triangle 5 back bottom
        this.triangles.push([4, 5, 7]);

        // Triangle 6 back top
        this.triangles.push([4, 7, 6]);

        // Triangle 7 left bottom
        this.triangles.push([5, 0, 3]);

        // Triangle 8 left top
        this.triangles.push([5, 3, 7]);

        // Triangle 9 top bottom
        this.triangles.push([3, 2, 6]);

        // Triangle 10 top top
        this.triangles.push([3, 6, 7]);

        // Triangle 11 bottom bottom
        this.triangles.push([1, 0, 5]);

        // Triangle 12 bottom top
        this.triangles.push([1, 5, 4]);
    }
}
