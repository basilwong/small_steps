// Rename this sample file to main.js to use on your project.
// The main.js file will be overwritten in updates/reinstalls.

// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

// Your Google Cloud Platform project ID
const projectId = 'lumohacks2018-216608';

// Creates a client
const datastore = new Datastore({
  projectId: projectId,
});

// The kind for the new entity
const kind = 'User';
// The name/ID for the new entity
const name = 'sampleuser1';
// The Cloud Datastore key for the new entity
const userKey = datastore.key([kind, name]);

// Prepares the new entity
const user = {
  key: userKey,
  data: {
    description: 'Buy milk',
  },
};

// Saves the entity
datastore
  .save(user)
  .then(() => {
    console.log(`Saved ${user.key.name}: ${user.data.description}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

var rn_bridge = require('rn-bridge');

// Echo every message received from react-native.
rn_bridge.channel.on('message', (msg) => {
  rn_bridge.channel.send(msg);
} );

// Inform react-native node is initialized.
rn_bridge.channel.send("Node was initialized.");
