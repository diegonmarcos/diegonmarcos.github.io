import { SlabWarehouseTwin } from './warehouse-app.js';

window.addEventListener('DOMContentLoaded', () => {
    const app = new SlabWarehouseTwin();
    window.warehouseApp = app;
    app.init();
});
