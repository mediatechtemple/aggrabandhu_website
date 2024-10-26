"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";

const Notification = () => {
    const [statusMessage, setStatusMessage] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const vapidPublicKey = "BJ4yB3TXt475Xnikfdb0o8TkdK2NYHKPSfIjgRReZOsKjm-R1eT0KY8sH7MOS-mx0rtPf1DvvZHh6C675dJIRCQ";

    const urlBase64ToUint8Array = (base64String) => {
        const padding = "=".repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
        const rawData = window.atob(base64);
        return new Uint8Array([...rawData].map(char => char.charCodeAt(0)));
    };

    const updateStatus = (message, isError = false) => {
        setStatusMessage(message);
        if (isError) console.error(message);
    };

    const subscribeToPushNotifications = async () => {
        try {
            if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
                throw new Error("Push notifications are not supported");
            }

            const registration = await navigator.serviceWorker.register("/sw.js");
            await navigator.serviceWorker.ready;

            const permission = await window.Notification.requestPermission();
            if (permission !== "granted") {
                updateStatus("Notification permission denied.");
                return; // Don't proceed if permission is denied
            }

            const subscribeOptions = {
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
            };

            const pushSubscription = await registration.pushManager.subscribe(subscribeOptions);

            const response = await fetch("https://backend.aggrabandhuss.org/api/notificationweb/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    endpoint: pushSubscription.endpoint,
                    auth: btoa(String.fromCharCode.apply(null, new Uint8Array(pushSubscription.getKey("auth")))),
                    p256dh: btoa(String.fromCharCode.apply(null, new Uint8Array(pushSubscription.getKey("p256dh")))),
                }),
            });

            if (!response.ok) throw new Error("Failed to store subscription on server");

            updateStatus("Successfully subscribed to push notifications!");
            setIsSubscribed(true);
            setShowCard(false);

            // Save to localStorage only after successful subscription
            localStorage.setItem("notificationSeen", "true");
        } catch (error) {
            updateStatus(`Error: ${error.message}`, true);
        }
    };

    useEffect(() => {
        if (!localStorage.getItem("notificationSeen")) {
            setShowCard(true);
        }
    }, []);

    return (
        <>
            {showCard && !isSubscribed && (
                <div className="fixed top-0 left-60 transform -translate-x-1/2 z-50">
                    <Card>
                        <CardHeader>
                            <CardTitle>Stay Updated</CardTitle>
                            <CardDescription>Enable notifications to receive updates from us.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between gap-2">
                                <Button onClick={subscribeToPushNotifications}>Allow Notifications</Button>
                                <Button variant="secondary" onClick={() => setShowCard(false)}>Dismiss</Button>
                            </div>
                            {statusMessage && (
                                <p className={`mt-2 ${isSubscribed ? "text-green-700" : "text-red-700"}`}>
                                    {statusMessage}
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            )}
        </>
    );
};

export default Notification;
