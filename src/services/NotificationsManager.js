import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { Platform } from "react-native";

class NotificationsManager {
    configure = () => {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
              console.log("TOKEN:", token);
            },
          
            // (required) Called when a remote is received or opened, or local notification is opened
            onNotification: function (notification) {
              console.log("NOTIFICATION:", notification);
          
              // process the notification
          
              // (required) Called when a remote is received or opened, or local notification is opened
              notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
          
            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
              alert: true,
              badge: true,
              sound: true,
            },
          
            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,
          
            /**
             * (optional) default: true
             * - Specified if permissions (ios) and token (android and ios) will requested or not,
             * - if not, you must call PushNotificationsHandler.requestPermissions() later
             * - if you are not using remote notification or do not have Firebase installed, use this:
             *     requestPermissions: Platform.OS === 'ios'
             */
            requestPermissions: true,
          });
    }

    _buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
          id: id,
          autoCancel: true,
          largeIcon: options.largeIcon || "ic_launcher", 
          smallIcon: options.smallIcon || "ic_notification",
          bigText: message || '',
          subText: title || '',
          vibrate: options.vibrate || true,
          vibration: options.vibration || 300,
          priority: options.priority || "hight",
          importance: options.importance || "high",
          data: data,
        }
    }

    _buildIOSNotification = (id, title, message, data = {}, options = {}) => {
        return {
            alertAction: options.alertAction || "view", // (optional) default: view
            category: options.category || "", // (optional) default: empty string
            userInfo: {
                id: id,
                item: data
            },
        }
    }

    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            /* Android Only Properties */
            ...this._buildAndroidNotification(id, title, message, data, options),

            /* IOS Only Properties */
            ...this._buildIOSNotification(id, title, message, data, options),

            /* Android and IOSOnly Properties */
            title: title || "", 
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || "default", 
            userInteraction: flase // If the notification was opened by the user from the notification area or not
        })
    }

    cancelAllLocalNotification = () => {
        if (Platform.OS === 'ios') {
            PushNotificationIOS.removeAllDeliveredNotifications()
        } else {
            PushNotification.cancelAllLocalNotifications()
        }
    }
}

export const notificationsManager = new NotificationsManager()