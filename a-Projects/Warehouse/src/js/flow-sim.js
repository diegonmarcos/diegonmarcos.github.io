/**
 * SUPPLY FLOW SIMULATOR
 * Purchase orders (quarry sources -> warehouse) and the downstream sales
 * lifecycle derived from the existing slab dataset, plus shared stage
 * metadata (icon / color / resume copy) so every dashboard card renders
 * with one consistent design.
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

    // Single source of truth for how every stage looks, everywhere it appears
    // (Inventory Flow, Sales Flow, Inventory Balance). Keeps the three
    // dashboard sections visually identical instead of three bespoke layouts.
    static STAGE_META = {
        Requested:  { color: '#38bdf8', bar: 'bg-sky-500',     ring: 'border-sky-500/30',     soft: 'bg-sky-500/10',     icon: 'M12 4v16m8-8H4' },
        Shipped:    { color: '#f59e0b', bar: 'bg-amber-500',   ring: 'border-amber-500/30',   soft: 'bg-amber-500/10',   icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
        Delivered:  { color: '#34d399', bar: 'bg-emerald-500', ring: 'border-emerald-500/30', soft: 'bg-emerald-500/10', icon: 'M5 13l4 4L19 7' },
        Available:  { color: '#34d399', bar: 'bg-emerald-500', ring: 'border-emerald-500/30', soft: 'bg-emerald-500/10', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
        Reserved:   { color: '#f59e0b', bar: 'bg-amber-500',   ring: 'border-amber-500/30',   soft: 'bg-amber-500/10',   icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        Bought:     { color: '#38bdf8', bar: 'bg-sky-500',     ring: 'border-sky-500/30',     soft: 'bg-sky-500/10',     icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m-10 0a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z' },
        Delivering: { color: '#a78bfa', bar: 'bg-violet-500',  ring: 'border-violet-500/30',  soft: 'bg-violet-500/10',  icon: 'M8 16V8a2 2 0 012-2h4a2 2 0 012 2v8m-8 0H5a1 1 0 01-1-1v-3.05a2.5 2.5 0 01.732-1.768L7 9m1 7h8m0 0h3a1 1 0 001-1v-2.264a2 2 0 00-.293-1.045l-1.599-2.664A2 2 0 0016.42 9H16m0 7v-7' },
    };

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
