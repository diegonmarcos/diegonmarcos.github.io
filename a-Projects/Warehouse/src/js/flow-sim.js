/**
 * SUPPLY FLOW SIMULATOR
 * Procurement purchase orders (quarry sources -> warehouse) and the
 * downstream fulfillment lifecycle derived from the existing slab dataset.
 */
export class FlowSimulator {
    static SOURCES = [
        { name: 'Carrara Quarry Group', location: 'Tuscany, Italy', material: 'Carrara White' },
        { name: 'Marquina Extraction Co.', location: 'Basque Country, Spain', material: 'Nero Marquina' },
        { name: 'Alpi Verde Mining', location: 'Piedmont, Italy', material: 'Verde Alpi' },
        { name: 'Marfil Sierra Quarries', location: 'Andalusia, Spain', material: 'Crema Marfil' },
        { name: 'Gold Coast Calacatta', location: 'Tuscany, Italy', material: 'Calacatta Gold' },
    ];

    static PROCUREMENT_STAGES = ['Requested', 'Shipped', 'Delivered'];
    static LIFECYCLE_STAGES = ['Available', 'Reserved', 'Bought', 'Delivering', 'Delivered'];

    static generatePurchaseOrders() {
        const orders = [];
        let orderNum = 1;

        this.SOURCES.forEach((source, srcIdx) => {
            const orderCount = 6 + (srcIdx % 3);
            for (let i = 1; i <= orderCount; i++) {
                const distributionSeed = (srcIdx * 7 + i * 13) % 30;
                let status;
                if (distributionSeed < 10) status = 'Requested';
                else if (distributionSeed < 20) status = 'Shipped';
                else status = 'Delivered';

                const quantity = 8 + ((srcIdx + i) % 12);
                const unitAreaPrice = 150 + srcIdx * 35 + (i % 5) * 10;
                const orderValue = Math.round(quantity * unitAreaPrice * 2.6);

                orders.push({
                    id: `PO-${orderNum.toString().padStart(4, '0')}`,
                    source: source.name,
                    sourceLocation: source.location,
                    material: source.material,
                    quantity,
                    orderValue,
                    status,
                });
                orderNum++;
            }
        });

        return orders;
    }

    // Existing slab status is only Available / Reserved / Sold. This extends
    // "Sold" deterministically into the fuller warehouse-to-customer lifecycle
    // (Bought -> Delivering -> Delivered) for the Supply Flow dashboard, without
    // touching the underlying `status` field other tabs already depend on.
    static deriveSlabFlowStage(slab) {
        if (slab.status === 'Available') return 'Available';
        if (slab.status === 'Reserved') return 'Reserved';
        const hash = (slab.line * 31 + slab.aFrame * 17 + slab.position * 7) % 3;
        return hash === 0 ? 'Bought' : hash === 1 ? 'Delivering' : 'Delivered';
    }
}
