import { Platform, Alert, DeviceEventEmitter } from "react-native";
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { AlarmNotification } from "../components/AlarmNotification";

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

    _buildActions = () => {
        (function() {
            // Register all the valid actions for notifications here and add the action handler for each action
            PushNotification.registerNotificationActions(['Accept','Reject','Yes','No']);
            DeviceEventEmitter.addListener('notificationActionReceived', function(action){
              console.log ('Notification action received: ' + action);
              const info = JSON.parse(action.dataJSON);
              if (info.action == 'Accept') {
                Alert.alert("Testando")
              } else if (info.action == 'Reject') {
                // Do work pertaining to Reject action here
              }
              // Add all the required actions handlers
            });
          })();
    }

    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            /* Android Only Properties */
            ...this._buildAndroidNotification(id, title, message, data, options),

            /* IOS Only Properties */
            ...this._buildIOSNotification(id, title, message, data, options),

            /* Android and IOS Only Properties */
            title: title || "", 
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || "default", 
            userInteraction: false // If the notification was opened by the user from the notification area or not
        })
    }

    alarmNotification = (id, title, message, frequency, data = {}, options = {}) => {
        var frequencyMilli = frequency * 1000; // hour to millisecond conversion (hour * minutes * seconds * 1000)
        
        PushNotification.localNotificationSchedule({
            /* Android Only Properties */
            ...this._buildAndroidNotification(id, title, message, data, options),

            /* IOS Only Properties */
            ...this._buildIOSNotification(id, title, message, data, options),

            /* Android and IOS Only Properties */
            title: title || "", 
            message: message || "", 

            vibrate: options.vibrate || true,
            vibration: options.vibration || 5000,
            priority: "hight",
            importance: "high",
            playSound: options.playSound || true,
            soundName: options.soundName || "alarm_ringtone.mp3",

            actions: '["Accept", "Reject"]',
    
            // Alarm Clock Time
            date: new Date(Date.now() + frequencyMilli),
            //repeatTime: frequencyMilli,
            //repeatType: "time",
            
            
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