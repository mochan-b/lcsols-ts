function findHeater(house: number, heaters: number[]): number {
    var left = 0
    var right = heaters.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (heaters[mid] == house) {
            return mid
        } else if (heaters[mid] < house) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return left
}

export function findRadius(houses: number[], heaters: number[]): number {
    houses.sort((a, b) => a - b)
    heaters.sort((a, b) => a - b)

    var radius = 0

    for (const house of houses) {
        const heaterIndex = findHeater(house, heaters)

        const leftDistFn = (): number => house - heaters[heaterIndex - 1]
        const rightDistFn = (): number => heaters[heaterIndex] - house

        var heaterDist: number
        if (heaterIndex == 0) {
            heaterDist = rightDistFn()
        } else if (heaterIndex == heaters.length) {
            heaterDist = leftDistFn()
        } else {
            heaterDist = Math.min(leftDistFn(), rightDistFn())
        }

        radius = Math.max(radius, heaterDist)
    }

    return radius
};
