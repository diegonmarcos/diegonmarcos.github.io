export function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.classList.add('closing');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}
//# sourceMappingURL=notification.js.map