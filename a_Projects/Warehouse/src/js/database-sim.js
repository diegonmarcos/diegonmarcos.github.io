import { MARBLE_DIF_CONFIG } from './marble-config.js';

/**
 * STATIC DATABASE SIMULATOR
 */
export class JSONDatabaseSim {
    static generateJSONDataset() {
        const materialsKeys = Object.keys(MARBLE_DIF_CONFIG);
        const totalSides = 70;
        const sideSlabCounts = [];
        let runningTotal = 0;

        for (let i = 0; i < totalSides; i++) {
            let count = 5 + (i % 5);
            if (i % 3 === 0) count += 1;
            if (i % 7 === 0) count += 1;
            sideSlabCounts.push(count);
            runningTotal += count;
        }

        let adjustment = 500 - runningTotal;
        let adjIdx = 0;
        while (adjustment !== 0) {
            if (adjustment > 0) {
                sideSlabCounts[adjIdx % totalSides]++;
                adjustment--;
            } else {
                sideSlabCounts[adjIdx % totalSides]--;
                adjustment++;
            }
            adjIdx++;
        }

        let sideIndex = 0;
        const arrayRecords = [];

        for (let line = 1; line <= 5; line++) {
            for (let aFrame = 1; aFrame <= 7; aFrame++) {
                for (const side of ['Left', 'Right']) {
                    const sideCode = side[0];
                    const numSlabsOnThisSide = sideSlabCounts[sideIndex];
                    sideIndex++;

                    for (let slabIndex = 1; slabIndex <= numSlabsOnThisSide; slabIndex++) {
                        const id = `SLAB-L${line}-AF${aFrame}-${sideCode}-${slabIndex.toString().padStart(2, '0')}`;
                        const material = materialsKeys[(line + aFrame + slabIndex) % materialsKeys.length];
                        const config = MARBLE_DIF_CONFIG[material];

                        const width = Number((2.4 + Math.sin(slabIndex * 0.3) * 0.2 + (aFrame % 3) * 0.1).toFixed(2));
                        const height = Number((1.4 + Math.cos(slabIndex * 0.3) * 0.15 + (line % 2) * 0.1).toFixed(2));
                        const thickness = slabIndex % 6 === 0 ? 0.03 : 0.02;
                        const sizeString = `${width.toFixed(2)}m x ${height.toFixed(2)}m x ${(thickness * 100).toFixed(0)}cm`;

                        const area = width * height;
                        const weight = Number((area * thickness * config.density).toFixed(2));
                        const priceFactor = thickness === 0.03 ? 1.35 : 1.0;
                        const priceValuation = Math.round(area * config.priceSqM * priceFactor * (1 + (slabIndex % 4) * 0.05));

                        const warehouseLocation = `Line ${line}, A-Frame ${aFrame}, ${side} side`;
                        const internalMapLocation = `L${line}-AF${aFrame}-${sideCode}-S${slabIndex.toString().padStart(2, '0')}`;

                        let status = 'Available';
                        const randVal = (line * aFrame * slabIndex * 19) % 100;
                        if (randVal > 88) status = 'Sold';
                        else if (randVal > 78) status = 'Reserved';

                        const seed = `0x${((slabIndex * 17 + aFrame * 13) % 256).toString(16).toUpperCase().padStart(2, '0')}`;

                        arrayRecords.push({
                            id,
                            line,
                            aFrame,
                            side,
                            position: slabIndex,
                            material,
                            colour: config.colourDesc,
                            size: sizeString,
                            width,
                            height,
                            thickness,
                            weight,
                            price: priceValuation,
                            warehouseLocation,
                            internalMapLocation,
                            status,
                            seed
                        });
                    }
                }
            }
        }

        return JSON.stringify(arrayRecords);
    }
}
