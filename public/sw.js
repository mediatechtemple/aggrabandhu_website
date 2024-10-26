self.addEventListener('push', function(event) {
    if (event.data) {
        const data = event.data.json();

        // Check for user subscription before showing the notification
        const options = {
            body: data.body,
            icon: '/api/placeholder/64/64',
            badge: '/api/placeholder/32/32',
            vibrate: [200, 100, 200],
            data: {
                timestamp: new Date().getTime()
            },
            actions: [
                {
                    action: 'open',
                    title: 'Open App'
                }, 
                {
                    action: 'close',
                    title: 'Close'
                }
            ]
        };

        // Only show notification if the user has subscribed
        if (Notification.permission === "granted") {
            event.waitUntil(
                self.registration.showNotification(data.title, options)
            );
        }
    }
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();

    if (event.action === 'open') {
        event.waitUntil(
            clients.matchAll({
                type: 'window',
                includeUncontrolled: true
            }).then(function(clientList) {
                for (let i = 0; i < clientList.length; i++) {
                    const client = clientList[i];
                    if (client.url === urlToOpen && 'focus' in client) {
                        return client.focus();
                    }
                }
                if (clients.openWindow) {
                    return clients.openWindow(urlToOpen);
                }
            })
        );
    }
});
