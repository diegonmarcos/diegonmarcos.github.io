/**
 * Pseudo-Random Number Generator (mulberry32 algorithm)
 * Ensures 100% deterministic vein and marble synthesis per unique configuration seed.
 */
export class SeededPRNG {
    constructor(seed) {
        this.seed = seed;
    }
    next() {
        let z = (this.seed += 0x6D2B79F5);
        z = Math.imul(z ^ (z >>> 15), z | 1);
        z ^= z + Math.imul(z ^ (z >>> 7), z | 61);
        return ((z ^ (z >>> 14)) >>> 0) / 4294967296;
    }
    nextRange(min, max) {
        return min + this.next() * (max - min);
    }
}
