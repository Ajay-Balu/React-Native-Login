import notifee from '@notifee/react-native';

async function onDisplayNotification(title, body) {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });
  
  // Display a notification
  await notifee.displayNotification({
    title: title || 'Success!!!',
    body: body || 'Registered Successfully',
    android: {
      channelId,
      smallIcon: 'ic_launcher',
    },
  });
}

export default onDisplayNotification;
