import { Platform, DeviceEventEmitter } from "react-native";
import PushNotification, { PushNotificationScheduleObject } from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";

class PushNotifications  {
  
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

    _buildAndroidNotification = (title, message, data = {}, options = {}) => {
        return {
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

    _buildIOSNotification = (title, message, data = {}, options = {}) => {
        return {
            alertAction: options.alertAction || "view", // (optional) default: view
            category: options.category || "", // (optional) default: empty string
            userInfo: {
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
                console.log('Passou no test dentro')
              } else if (info.action == 'Reject') {
                // Do work pertaining to Reject action here
              }
              // Add all the required actions handlers
            });
          })();
    }

    showNotification = (title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            /* Android Only Properties */
            ...this._buildAndroidNotification(title, message, data, options),

            /* IOS Only Properties */
            ...this._buildIOSNotification(title, message, data, options),

            /* Android and IOS Only Properties */
            title: title || "", 
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || "default", 
            userInteraction: false // If the notification was opened by the user from the notification area or not
        })
    }

    alarmNotification = (name, instrutions, frequency, date, options = {}) => {      
      // hour to millisecond conversion (hour * minutes * miliseonds)
      var frequencyMilli = frequency * 60 * 60 * 1000;
           
      PushNotification.localNotificationSchedule({
            /* Android Only Properties */
            ...this._buildAndroidNotification("Lembrete de Medicamento!", name, {}, options),

            /* IOS Only Properties */
            ...this._buildIOSNotification("Lembrete de Medicamento!", name, {}, options),

            /* Android and IOS Only Properties */
            title: "Lembrete de Medicamento!", 
            message: name || "",
            //bigText: "Instruções: " + instrutions || "",
            subText: "",

            //id: name,
            autoCancel: false,
            vibrate: options.vibrate || true,
            vibration: options.vibration || 3500,
            priority: "hight",
            importance: "high",
            playSound: options.playSound || true,
            soundName: options.soundName || "alarm_ringtone.mp3",
            smallIcon: "@drawable/icon_notification",

            //actions: '["Accept", "Reject"]',
    
            // Alarm Clock Time
            date: date,
            repeatTime: frequencyMilli,
            repeatType: "time",         
            
          })
    }

    getDeliveredNotifications = () => {
        PushNotificationIOS.getDeliveredNotifications(callback);
    }

    cancelLocalNotifications = (id) => {
      PushNotification.cancelLocalNotifications({id: id});
    }

    cancelAllLocalNotification = () => {
        if (Platform.OS === 'ios') {
            PushNotificationIOS.removeAllDeliveredNotifications()
        } else {
            PushNotification.cancelAllLocalNotifications()
        }
    }

    // Add cancel notification logic by ID

}

export default PushNotifications;