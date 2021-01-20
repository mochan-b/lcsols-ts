import {findRadius} from "./Solution475"

describe("Solution 475 tests", () => {
    test('[1,2,3], [2]', () => {
        var houses = [1, 2, 3]
        var heaters = [2]

        const result = findRadius(houses, heaters);

        expect(result).toBe(1);
    });

    test('[1,3,2], [2]', () => {
        var houses = [1, 3, 2]
        var heaters = [2]

        const result = findRadius(houses, heaters);

        expect(result).toBe(1);
    });

    test('[1,2,3,4], [1,4]', () => {
        var houses = [1, 2, 3, 4]
        var heaters = [1, 4]

        const result = findRadius(houses, heaters);

        expect(result).toBe(1);
    });

    test('[1,5], [2]', () => {
        var houses = [1, 5]
        var heaters = [2]

        const result = findRadius(houses, heaters);

        expect(result).toBe(3);
    });

    test('[1,5], [10]', () => {
        var houses = [1, 5]
        var heaters = [10]

        const result = findRadius(houses, heaters);

        expect(result).toBe(9);
    });

    test('unsorted heaters', () => {
        var houses = [282475249, 622650073, 984943658, 144108930, 470211272, 101027544, 457850878, 458777923]
        var heaters = [823564440, 115438165, 784484492, 74243042, 114807987, 137522503, 441282327, 16531729, 823378840, 143542612]

        const result = findRadius(houses, heaters);

        expect(result).toBe(161834419);
    });

    test('[474833169,264817709,998097157,817129560],[197493099,404280278,893351816,505795335]', () => {
        var houses = [474833169, 264817709, 998097157, 817129560]
        var heaters = [197493099, 404280278, 893351816, 505795335]

        const result = findRadius(houses, heaters);

        expect(result).toBe(104745341);
    });
})
