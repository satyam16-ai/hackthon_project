const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.setAdminClaim = functions.https.onCall(async (data, context) => {
  // Check if the request is made by an already authenticated admin
  if (!(context.auth && context.auth.token && context.auth.token.admin === true)) {
    throw new functions.https.HttpsError('permission-denied', 'Must be an admin to set admin claim');
  }

  const { email } = data;
  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    return { result: `Success! ${email} has been made an admin.` };
  } catch (error) {
    throw new functions.https.HttpsError('internal', error.message);
  }
});